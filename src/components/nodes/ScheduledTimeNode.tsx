import { ScheduledTimeNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";
import { Chip } from "@mui/material";

import "./ScheduledTimeNode.scss";

const ScheduledTimeNode = ({ id, data }: NodeProps<ScheduledTimeNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            <span className="scheduled-time-node__title">Name: </span>
            <Chip label={data.name} />
        </NodeWrapper>
    );
};

export default ScheduledTimeNode;
