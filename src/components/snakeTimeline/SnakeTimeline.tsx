'use client';

import React, { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';

import { iconMapping, statusTextMapping } from './mappings/Mappings';

import { DocumentStatusDTO } from '@/types/DTO/document.dto';

//THIS IMPORT IS FOR NPX INSTALLER DELETE IT WHEN IMPLEMENT
import { mockDocumentStatuses } from '@/types/mocks/documentStatuses.mock';

interface Props {
  data?: DocumentStatusDTO[];
}

function SnakeTimeline({ data }: Props) {
  const [elementsPerRow, setElementsPerRow] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const timelineData = data || mockDocumentStatuses; //DELETE THIS MOCK WHEN IMPLEMENT

  const updateElementsPerRow = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const elementWidth = 200;

      setElementsPerRow(Math.floor(containerWidth / elementWidth));
    }
  };

  useEffect(() => {
    updateElementsPerRow();
    window.addEventListener('resize', updateElementsPerRow);

    return () => {
      window.removeEventListener('resize', updateElementsPerRow);
    };
  }, []);

  const groupedStatuses = timelineData.reduce<DocumentStatusDTO[][]>(
    (acc, status, index) => {
      const rowIndex = Math.floor(index / elementsPerRow);

      if (!acc[rowIndex]) acc[rowIndex] = [];
      acc[rowIndex].push(status);

      return acc;
    },
    [],
  );

  return (
    <div className="flex justify-center items-center w-full h-full p-10">
      <div
        ref={containerRef}
        className={`flex flex-col min-w-full ${
          groupedStatuses.length % 2 === 0 ? 'items-end' : 'items-start'
        }`}
      >
        {groupedStatuses.map((row, rowIndex) => (
          <TimelineRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            totalRows={groupedStatuses.length}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineRow({
  row,
  rowIndex,
  totalRows,
}: {
  row: DocumentStatusDTO[];
  rowIndex: number;
  totalRows: number;
}) {
  return (
    <div
      className={`relative flex ${rowIndex % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {row.map((statusItem, index) => (
        <TimelineItem
          key={statusItem.id}
          statusItem={statusItem}
          index={index}
          rowIndex={rowIndex}
          isLastRow={rowIndex === totalRows - 1}
          isLastItem={index === row.length - 1}
          totalRows={totalRows}
        />
      ))}
    </div>
  );
}

function TimelineItem({
  statusItem,
  index,
  rowIndex,
  isLastRow,
  isLastItem,
  totalRows,
}: {
  statusItem: DocumentStatusDTO;
  index: number;
  rowIndex: number;
  isLastRow: boolean;
  isLastItem: boolean;
  totalRows: number;
}) {
  const leftBorderClass = getLeftBorderClass(
    rowIndex,
    index,
    isLastRow,
    isLastItem,
    totalRows,
  );
  const rightBorderClass = getRightBorderClass(
    rowIndex,
    index,
    isLastRow,
    isLastItem,
    totalRows,
  );

  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="flex flex-row items-center w-52">
        <div
          className={`flex-grow border-b-4 mb-1 relative ${leftBorderClass}`}
        />

        <div className="w-16 h-16 text-lg text-blue-500 relative rounded-full border-4 border-gray-700">
          {iconMapping[statusItem.status] || (
            <div className="text-center mt-2 font-bold text-3xl text-gray-700">
              !
            </div>
          )}
        </div>

        <div className={`flex-grow border-b-4 mb-1 ${rightBorderClass}`} />
      </div>

      <div className="flex flex-col items-center">
        <span className="font-bold">
          {statusTextMapping[statusItem.status] || statusItem.status}
        </span>
        <span className="text-sm">
          {format(new Date(statusItem.date), 'dd/MM/yyyy')}
        </span>
        <span className="text-sm mb-4">{statusItem.createdBy || 'SYSTEM'}</span>
      </div>
    </div>
  );
}

function getLeftBorderClass(
  rowIndex: number,
  index: number,
  isLastRow: boolean,
  isLastItem: boolean,
  totalRows: number,
) {
  if (rowIndex === 0 && index === 0) return 'border-transparent';
  if (isLastRow && isLastItem && totalRows % 2 === 0)
    return 'border-transparent';
  if (
    (rowIndex % 2 === 0 && index === 0) ||
    (rowIndex % 2 === 1 && isLastItem)
  ) {
    return `border-gray-700 border-dashed ${rowIndex % 2 === 0 ? 'arrow-right-l' : 'vertical-left'}`;
  }
  return 'border-gray-700';
}

function getRightBorderClass(
  rowIndex: number,
  index: number,
  isLastRow: boolean,
  isLastItem: boolean,
  totalRows: number,
) {
  if (
    (rowIndex % 2 === 1 && index === 0) ||
    (rowIndex === 0 && isLastItem && totalRows > 1)
  ) {
    return `border-gray-700 border-dashed ${rowIndex % 2 === 0 ? 'vertical-right' : 'arrow-to-left-r'}`;
  }
  if (isLastRow && isLastItem && totalRows % 2 !== 0)
    return 'border-transparent';
  if (rowIndex % 2 === 0 && isLastItem) {
    return `border-gray-700 border-dashed ${rowIndex % 2 === 0 ? 'vertical-right' : 'arrow-to-left-r'}`;
  }
  return 'border-gray-700';
}

export default SnakeTimeline;
