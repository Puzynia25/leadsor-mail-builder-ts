import { EmailNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./EmailNode.scss";

const EmailNode = ({ id, data }: NodeProps<EmailNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            {data.email && (
                <>
                    <span className="immediately-node__title">Sender: </span>
                    <Chip label={data.email} />
                </>
            )}
        </NodeWrapper>
    );
};

export default EmailNode;
