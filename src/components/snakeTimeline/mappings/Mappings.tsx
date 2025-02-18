import {
    UserRoundCheck,
    UserRoundX,
    Check,
    Contact,
    MailWarning,
    Pencil,
    Loader,
    FilePlus,
    CircleX,
    UserRoundPlus,
} from 'lucide-react';
import { DocumentStatesEnum } from '../../../types/enums/document-state-type.enum';

export const iconMapping: {
    [key in DocumentStatesEnum]?: React.JSX.Element;
} = {
    [DocumentStatesEnum.APPROVED]: (
        <UserRoundCheck className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.ARCHIVED]: (
        <UserRoundCheck className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.CANCELLED]: (
        <UserRoundX className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.COMPLETED]: (
        <Check className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.DELETED]: (
        <Contact className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.DRAFT]: (
        <MailWarning className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.EDITED]: (
        <Pencil className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.EXPIRED]: (
        <Loader className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.FINALIZED]: (
        <Contact className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.IN_REVIEW]: (
        <MailWarning className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.NEW_DOCUMENT]: (
        <FilePlus className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.ON_HOLD]: (
        <CircleX className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.PENDING_APPROVAL]: (
        <Loader className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.PROCESSING]: (
        <MailWarning className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.PUBLISHED]: (
        <CircleX className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.RECEIVED]: (
        <UserRoundPlus className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.REJECTED]: (
        <CircleX className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
    [DocumentStatesEnum.SENT]: (
        <CircleX className={'w-8 h-8 ml-3 mt-3 text-gray-700'} />
    ),
};

export const statusTextMapping: {
    [key in DocumentStatesEnum]?: string;
} = {
    [DocumentStatesEnum.APPROVED]: 'APPROVED',
    [DocumentStatesEnum.ARCHIVED]: 'ARCHIVED',
    [DocumentStatesEnum.CANCELLED]: 'CANCELLED',
    [DocumentStatesEnum.COMPLETED]: 'COMPLETED',
    [DocumentStatesEnum.DELETED]: 'DELETED',
    [DocumentStatesEnum.DRAFT]: 'DRAFT',
    [DocumentStatesEnum.EDITED]: 'EDITED',
    [DocumentStatesEnum.EXPIRED]: 'EXPIRED',
    [DocumentStatesEnum.FINALIZED]: 'FINALIZED',
    [DocumentStatesEnum.IN_REVIEW]: 'IN REVIEW',
    [DocumentStatesEnum.NEW_DOCUMENT]: 'NEW DOCUMENT',
    [DocumentStatesEnum.ON_HOLD]: 'ON HOLD',
    [DocumentStatesEnum.PENDING_APPROVAL]: 'PENDING APPROVAL',
    [DocumentStatesEnum.PROCESSING]: 'PROCESSING',
    [DocumentStatesEnum.PUBLISHED]: 'PUBLISHED',
    [DocumentStatesEnum.RECEIVED]: 'RECEIVED',
    [DocumentStatesEnum.REJECTED]: 'REJECTED',
    [DocumentStatesEnum.SENT]: 'SENT',
};
