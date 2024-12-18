import { ContactStorageNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./ContactStorageNode.scss";

const ContactStorageNode = ({ id, data }: NodeProps<ContactStorageNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            {data.name && (
                <>
                    <span className="node__title">Name: </span>
                    <Chip label={data.name} />
                </>
            )}
        </NodeWrapper>
    );
};

export default ContactStorageNode;
