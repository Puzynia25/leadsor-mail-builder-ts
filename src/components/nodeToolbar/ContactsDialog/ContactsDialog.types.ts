import { CommonNodeData } from "../../nodes/Node.types";

interface Contact {
    time: string;
    email: string;
    phone: string;
}

export interface ContactsDialogProps {
    open: boolean;
    onClose: () => void;
    contacts: Contact[];
    data: CommonNodeData;
}
