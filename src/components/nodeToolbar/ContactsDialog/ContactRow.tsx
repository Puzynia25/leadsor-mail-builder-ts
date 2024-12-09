import { TableCell, TableRow } from "@mui/material";
import { Contact } from "./ContactsDialog.types";

const ContactRow = ({ contact }: { contact: Contact }) => {
    return (
        <TableRow>
            <TableCell>{contact.time}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.contactContinued}</TableCell>
        </TableRow>
    );
};

export default ContactRow;
