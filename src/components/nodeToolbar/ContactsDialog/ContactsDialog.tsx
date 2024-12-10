import { Dialog, DialogTitle, DialogContent, Typography, Chip } from "@mui/material";
import { ContactsDialogProps } from "./ContactsDialog.types";
import ContactsTable from "./ContactsTable";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

const ContactsDialog = ({ open, onClose, contacts, data }: ContactsDialogProps) => {
    const contactsTableContent =
        contacts.length === 0 ? <Typography>No data found</Typography> : <ContactsTable contacts={contacts} />;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <div>
                    <SectionTitle label={data.label} color={data.color} />
                    <p>Contacts that have passed through the node</p>
                    <Chip
                        label="The record of contacts passing through the nodes is kept for 7 days."
                        sx={{ marginTop: "15px", bgcolor: "#fbe1e1" }}
                    />
                </div>
            </DialogTitle>
            <DialogContent>{contactsTableContent}</DialogContent>
        </Dialog>
    );
};

export default ContactsDialog;
