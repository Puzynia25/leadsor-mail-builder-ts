import { Divider, IconButton } from "@mui/material";
import { ContactsOutlined, ContentCopyOutlined, DeleteOutlined, SettingsOutlined } from "@mui/icons-material";
import { NodeToolbar as FlowNodeToolbar, useReactFlow } from "@xyflow/react";
import { CommonNodeData, CustomNodeType } from "../nodes/Node.types";
import { v4 as uuidv4 } from "uuid";

import "./NodeToolbar.scss";
import { useState } from "react";
import ContactsDialog from "./ContactsDialog/ContactsDialog";

const NodeToolbar = ({ nodeId, data, selected }: { nodeId: string; data: CommonNodeData; selected: boolean }) => {
    const { setNodes } = useReactFlow();

    const [isContactsOpen, setContactsOpen] = useState(false);

    const onCopyNode = () => {
        const copyNode = (nodes: CustomNodeType[], nodeId: string): CustomNodeType[] => {
            const nodeToCopy = nodes.find((node) => node.id === nodeId);

            if (!nodeToCopy) return nodes;

            const newNode = {
                ...nodeToCopy,
                id: uuidv4(),
                position: {
                    x: nodeToCopy.position.x + 220,
                    y: nodeToCopy.position.y + 120,
                },
                selected: false,
            };

            return [...nodes, newNode];
        };

        setNodes((currentNodes) => copyNode(currentNodes, nodeId));
    };

    const onDeleteNode = () => {
        setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
    };

    const onOpenContacts = () => {
        setContactsOpen(true);
    };

    const onCloseContacts = () => {
        setContactsOpen(false);
    };

    return (
        <>
            <FlowNodeToolbar isVisible={selected} position="bottom" className="node-toolbar__wrapper">
                <IconButton onClick={data.onEdit}>
                    <SettingsOutlined className="node-toolbar__icon" />
                </IconButton>
                <IconButton onClick={onCopyNode}>
                    <ContentCopyOutlined fontSize="small" className="node-toolbar__icon" />
                </IconButton>
                <IconButton onClick={onOpenContacts}>
                    <ContactsOutlined fontSize="small" className="node-toolbar__icon" />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#fff" }} />
                <IconButton onClick={onDeleteNode}>
                    <DeleteOutlined className="node-toolbar__delete-icon" />
                </IconButton>
            </FlowNodeToolbar>
            <ContactsDialog open={isContactsOpen} onClose={onCloseContacts} contacts={contacts} />
        </>
    );
};

export default NodeToolbar;

const contacts = [{ time: "10:30 am", email: "example@example.com", phone: "+123456789" }];
