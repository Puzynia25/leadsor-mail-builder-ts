import { Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { ContactTableProps } from "./ContactsDialog.types";
import ContactRow from "./ContactRow";

const ContactsTable = ({ contacts }: ContactTableProps) => {
    const handleChangePage = () => {
        console.log("handleChangePage");
    };

    const handleChangeRowsPerPage = () => {
        console.log("handleChangePage");
    };

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
            <TableFooter>
                <TableRow>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                        colSpan={4}
                        count={10}
                        rowsPerPage={5}
                        page={1}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default ContactsTable;
