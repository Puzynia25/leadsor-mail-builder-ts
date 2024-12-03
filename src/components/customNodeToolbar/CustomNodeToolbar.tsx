import { Divider, IconButton } from "@mui/material";
import { ContactsOutlined, ContentCopyOutlined, DeleteOutlined, SettingsOutlined } from "@mui/icons-material";
import { NodeToolbar, useReactFlow } from "@xyflow/react";
import { CommonNodeData } from "../nodes/Node.types";

import "./CustomNodeToolbar.scss";

const CustomNodeToolbar = ({ nodeId, data, selected }: { nodeId: string; data: CommonNodeData; selected: boolean }) => {
    const { setNodes } = useReactFlow();

    const onDeleteNode = () => {
        setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
    };

    return (
        <>
            <NodeToolbar isVisible={selected} position="bottom" className="node-toolbar__wrapper">
                <IconButton onClick={data.onEdit}>
                    <SettingsOutlined className="node-toolbar__icon" />
                </IconButton>
                <IconButton onClick={(e) => console.log("copy")}>
                    <ContentCopyOutlined fontSize="small" className="node-toolbar__icon" />
                </IconButton>
                <IconButton onClick={(e) => console.log("contacts")}>
                    <ContactsOutlined fontSize="small" className="node-toolbar__icon" />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#fff" }} />
                <IconButton onClick={onDeleteNode}>
                    <DeleteOutlined className="node-toolbar__delete-icon" />
                </IconButton>
            </NodeToolbar>
        </>
    );
};

export default CustomNodeToolbar;
