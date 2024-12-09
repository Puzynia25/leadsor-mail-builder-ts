import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { ContactTableProps } from "./ContactsDialog.types";
import ContactRow from "./ContactRow";

const ContactsTable = ({ contacts }: ContactTableProps) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Pass-through time</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Contact continued to the node</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {contacts.map((contact) => (
                    <ContactRow key={contact.id} contact={contact} />
                ))}
            </TableBody>
        </Table>
    );
};

export default ContactsTable;
