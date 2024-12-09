import { CommonNodeData } from "../../nodes/Node.types";

export interface Contact {
    id: string;
    time: string;
    email: string;
    phone: string;
    contactContinued: string;
}

export interface ContactsDialogProps {
    open: boolean;
    onClose: () => void;
    contacts: Contact[];
    data: CommonNodeData;
}

export interface ContactTableProps {
    contacts: Contact[];
}
