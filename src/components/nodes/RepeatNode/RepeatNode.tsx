import { RepeatNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./RepeatNode.scss";

const RepeatNode = ({ id, data }: NodeProps<RepeatNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            {data.date && data.time && (
                <div>
                    <span className="scheduled-time-node__title">Activate: </span>
                    <Chip label={data.date} sx={{ margin: "5px" }} />
                    <Chip label={data.time} />
                </div>
            )}

            {data.repeatValue && data.repeatUnit && (
                <div>
                    <span className="wait-node__title">Repeat in: </span>
                    <Chip label={data.repeatValue} sx={{ margin: "5px" }} />
                    <Chip label={data.repeatUnit} />
                </div>
            )}

            {data.scheduledDate && data.scheduledTime && (
                <div>
                    <span className="scheduled-time-node__title">Deactivate: </span>
                    <Chip label={data.scheduledDate} sx={{ margin: "5px" }} />
                    <Chip label={data.scheduledTime} />
                </div>
            )}
        </NodeWrapper>
    );
};

export default RepeatNode;
