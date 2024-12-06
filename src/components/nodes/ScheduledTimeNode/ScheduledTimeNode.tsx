import { ScheduledTimeNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./ScheduledTimeNode.scss";

const ScheduledTimeNode = ({ id, data }: NodeProps<ScheduledTimeNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            {data.date && data.time && (
                <>
                    <span className="scheduled-time-node__title">Will start after: </span>
                    <Chip label={data.date} sx={{ margin: "5px" }} />
                    <Chip label={data.time} />
                </>
            )}
        </NodeWrapper>
    );
};

export default ScheduledTimeNode;
