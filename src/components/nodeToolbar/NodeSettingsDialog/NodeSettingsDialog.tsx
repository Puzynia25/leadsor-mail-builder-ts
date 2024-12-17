import { SyntheticEvent, useState } from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Tabs,
    Tab,
    TextField,
    Divider,
    Chip,
} from "@mui/material";
import { INodeSettingsDialogProps } from "./NodeSettingsDialog.types";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import { useNodeSettings } from "../../../hooks/useNodeSettings";
import { getTabsConfig } from "./nodeSettingsTabs.config";

import "./NodeSettingsDialog.scss";

const NodeSettingsDialog = ({
    open,
    type,
    data,
    onClose,
    onUpdateNodeContent,
}: INodeSettingsDialogProps & { open: boolean }) => {
    const { render, advanced, applyChanges } = useNodeSettings({ type, data, onUpdateNodeContent });

    const [activeTab, setActiveTab] = useState(0);
    const [nodeName, setNodeName] = useState(data.label);

    const handleTabChange = (e: SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    const onApplyChanges = () => {
        if (applyChanges) {
            applyChanges();
        }

        if (nodeName !== data.label) {
            const newData = {
                ...data,
                label: nodeName,
            };

            onUpdateNodeContent(newData);
        }

        onClose();
    };

    const tabs = getTabsConfig();
    const visibleTabs = tabs.filter((tab) => tab.visible(type));

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle sx={{ paddingBottom: "0px" }}>
                {/* <Chip label={type} sx={{ marginBottom: 2 }}></Chip> */}
                <SectionTitle label={data.label} color={data.color} />
            </DialogTitle>
            <DialogContent>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    textColor="inherit"
                    TabIndicatorProps={{ style: { backgroundColor: "black" } }}>
                    {visibleTabs.map((tab) => (
                        <Tab key={tab.key} label={tab.label} />
                    ))}
                </Tabs>

                <Divider />
                <div className="node-settings__tab-content">
                    {visibleTabs[activeTab]?.content(data, nodeName, setNodeName, render, advanced)}
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
