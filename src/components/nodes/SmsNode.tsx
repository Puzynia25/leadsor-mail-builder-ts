import { SmsNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";
import { Chip } from "@mui/material";

import "./SmsNode.scss";

const SmsNode = ({ id, data }: NodeProps<SmsNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            SmsNode
            {/* <span className="immediately-node__title">Name: </span>
            <Chip label={data.name} /> */}
        </NodeWrapper>
    );
};

export default SmsNode;
