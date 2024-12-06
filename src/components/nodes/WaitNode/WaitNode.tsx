import { NodeProps } from "@xyflow/react";
import { WaitNodeType } from "../Node.types";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./WaitNode.scss";

const WaitNode = ({ id, data }: NodeProps<WaitNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            {/* <p className="wait-node__text">some delay...</p> */}

            {data.waitingType === "timePeriod" && (
                <div>
                    <span className="wait-node__title">Time period: </span>
                    <Chip label={data.timePeriod} size="small" sx={{ margin: "5px" }} />
                    <Chip label={data.timeRange} size="small" />
                </div>
            )}

            {data.waitingType === "calendar" && (
                <div>
                    <span className="wait-node__title">Calendar: </span>
                    <Chip label={data.calendar} size="small" />
                </div>
            )}
        </NodeWrapper>
    );
};

export default WaitNode;
