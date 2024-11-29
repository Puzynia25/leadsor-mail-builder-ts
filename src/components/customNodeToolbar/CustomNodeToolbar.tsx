import { Divider, IconButton } from "@mui/material";
import { ContactsOutlined, ContentCopyOutlined, DeleteOutlined, SettingsOutlined } from "@mui/icons-material";
import { NodeToolbar } from "@xyflow/react";
import { CommonNodeData } from "../nodes/Node.types";

import "./CustomNodeToolbar.scss";

const CustomNodeToolbar = ({ data, selected }: { data: CommonNodeData; selected: boolean }) => {
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
                <IconButton onClick={(e) => console.log("delete")}>
                    <DeleteOutlined sx={{ color: "#fff" }} fontSize="small" />
                </IconButton>
            </NodeToolbar>
        </>
    );
};

export default CustomNodeToolbar;
