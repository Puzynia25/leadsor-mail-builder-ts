import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { INodeSettingsDialogProps } from "./NodeSettingsDialog.types";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { useNodeSettings } from "../../../hooks/useNodeSettings";

import "./NodeSettingsDialog.scss";

const NodeSettingsDialog = ({
    open,
    type,
    data,
    onClose,
    onUpdateNodeContent,
}: INodeSettingsDialogProps & { open: boolean }) => {
    const { render, applyChanges } = useNodeSettings({ type, data, onUpdateNodeContent });

    const onApplyChanges = () => {
        if (applyChanges) {
            applyChanges();
        }

        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle>
                <SectionTitle label={data.label} color={data.color} />
            </DialogTitle>
            <DialogContent>
                <div className="node-settings__wrapper">
                    <div className="node-settings__content">{render}</div>
                </div>
            </DialogContent>
            <DialogActions sx={{ padding: "16px 24px" }}>
                <Button onClick={onClose} color="error">
                    Cancel
                </Button>
                <Button variant="contained" sx={{ bgcolor: "#1e1e1e" }} onClick={onApplyChanges}>
                    Apply
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NodeSettingsDialog;
