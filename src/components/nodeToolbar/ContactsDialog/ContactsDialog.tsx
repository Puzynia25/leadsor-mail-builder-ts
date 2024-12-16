import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Chip, Button } from "@mui/material";
import { ContactsDialogProps } from "./ContactsDialog.types";
import ContactsTable from "./ContactsTable";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { DateRangePicker, LocalizationProvider, SingleInputDateRangeField } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";

import "./ContactsDialog.scss";

const ContactsDialog = ({ open, onClose, contacts, data }: ContactsDialogProps) => {
    const [filterPeriod, setFilterPeriod] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    const onFilterApply = () => {
        if (filterPeriod[0] && filterPeriod[1]) {
            const filtered = contacts.filter((contact) => {
                const contactTime = dayjs(contact.time);
                return contactTime.isAfter(filterPeriod[0]) && contactTime.isBefore(filterPeriod[1]);
            });
            setFilteredContacts(filtered);
        } else {
            setFilteredContacts(contacts);
        }
    };

    const contactsTableContent =
        filteredContacts.length === 0 ? (
            <Typography>No data found</Typography>
        ) : (
            <ContactsTable contacts={filteredContacts} />
        );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                <div>
                    <div>
                        <SectionTitle label={data.label} color={data.color} />
                        <div className="contacts-dialog__title">
                            <p>Contacts that have passed through the node</p>
                            <div className="contacts-dialog__filter">
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <span className="contacts-dialog__filter-name">Period: </span>
                                    <DateRangePicker
                                        slots={{ field: SingleInputDateRangeField }}
                                        name="allowedRange"
                                        calendars={1}
                                        value={filterPeriod}
                                        onChange={(newValue) => setFilterPeriod(newValue)}
                                        slotProps={{
                                            textField: {
                                                placeholder: "all time history",
                                                sx: {
                                                    "& .MuiInputBase-root": { fontSize: "0.875rem" },
                                                    "& .MuiInputBase-input": { padding: "10px 14px;" },
                                                },
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                                <Button
                                    variant="contained"
                                    onClick={onFilterApply}
                                    sx={{ marginLeft: "10px", textTransform: "none", bgcolor: "#1e1e1e" }}>
                                    Apply Filter
                                </Button>
                            </div>
                        </div>
                    </div>

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
