import { EmailNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./EmailNode.scss";

const EmailNode = ({ id, data }: NodeProps<EmailNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            EmailNode
            {/* <span className="immediately-node__title">Name: </span>
            <Chip label={data.name} /> */}
        </NodeWrapper>
    );
};

export default EmailNode;
