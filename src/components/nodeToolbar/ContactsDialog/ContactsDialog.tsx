import {
    Dialog,
    DialogTitle,
    DialogContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    Chip,
} from "@mui/material";
import { ContactsDialogProps } from "./ContactsDialog.types";

const ContactsDialog = ({ open, onClose, contacts, data }: ContactsDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <div>
                    <div className="node-settings__title">
                        <h6>{data.label}</h6>
                        <div className="divider" />
                    </div>

                    <p>Contacts that have passed through the node</p>
                    <Chip
                        label="The record of contacts passing through the nodes is kept for 7 days."
                        sx={{ marginTop: "15px", bgcolor: "#fbe1e1" }}
                    />
                </div>
            </DialogTitle>
            <DialogContent>
                {contacts.length === 0 ? (
                    <Typography>No data found</Typography>
                ) : (
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Pass-through time</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Phone</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {contacts.map((contact, index) => (
                                <TableRow key={index}>
                                    <TableCell>{contact.time}</TableCell>
                                    <TableCell>{contact.email}</TableCell>
                                    <TableCell>{contact.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ContactsDialog;
