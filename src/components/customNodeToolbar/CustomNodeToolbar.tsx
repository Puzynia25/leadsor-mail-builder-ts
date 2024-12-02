import { Divider, IconButton } from "@mui/material";
import { ContactsOutlined, ContentCopyOutlined, DeleteOutlined, SettingsOutlined } from "@mui/icons-material";
import { NodeToolbar, useReactFlow } from "@xyflow/react";
import { CommonNodeData } from "../nodes/Node.types";

import "./CustomNodeToolbar.scss";

const CustomNodeToolbar = ({ nodeId, data, selected }: { nodeId: string; data: CommonNodeData; selected: boolean }) => {
    const { setNodes } = useReactFlow();

    const handleDeleteNode = () => {
        setNodes((nodes) => nodes.filter((node) => node.id !== nodeId));
    };

    return (
        <>
            <NodeToolbar isVisible={selected} position="bottom" className="node-toolbar__wrapper">
                <IconButton onClick={data.onEdit}>
                    <SettingsOutlined sx={{ color: "#fff" }} fontSize="small" />
                </IconButton>
                <IconButton onClick={(e) => console.log("copy")}>
                    <ContentCopyOutlined sx={{ color: "#fff" }} fontSize="small" />
                </IconButton>
                <IconButton onClick={(e) => console.log("contacts")}>
                    <ContactsOutlined sx={{ color: "#fff" }} fontSize="small" />
                </IconButton>
                <Divider orientation="vertical" variant="middle" flexItem sx={{ bgcolor: "#fff" }} />
                <IconButton onClick={handleDeleteNode}>
                    <DeleteOutlined sx={{ color: "#f53030d5" }} fontSize="small" />
                </IconButton>
            </NodeToolbar>
        </>
    );
};

export default CustomNodeToolbar;
