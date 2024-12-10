import { TableCell, TableRow } from "@mui/material";
import { Contact } from "./ContactsDialog.types";
import dayjs from "dayjs";

const ContactRow = ({ contact }: { contact: Contact }) => {
    const time = dayjs(contact.time).format("h:mm A");
    return (
        <TableRow>
            <TableCell>{time}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>{contact.contactContinued}</TableCell>
        </TableRow>
    );
};

export default ContactRow;
