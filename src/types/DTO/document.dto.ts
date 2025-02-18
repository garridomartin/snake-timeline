import { DocumentStatesEnum } from '../enums/document-state-type.enum';

export interface DocumentStatusDTO {
    id: number;
    createdBy: string;
    status: DocumentStatesEnum;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
}
