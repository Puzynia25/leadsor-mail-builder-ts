import { NodeProps } from "@xyflow/react";
import { WaitNodeType } from "../Node.types";
import NodeWrapper from "../NodeWrapper";

import "./WaitNode.scss";

const WaitNode = ({ id, data }: NodeProps<WaitNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            {/* <p className="wait-node__text">some delay...</p> */}

            {data.waitingType === "timePeriod" && (
                <div>
                    Time period:
                    <div>
                        <span className="wait-node__duration">{data?.timePeriod}</span>
                        <span className="wait-node__duration">{data?.timeRange}</span>
                    </div>
                </div>
            )}

            {data.waitingType === "calendar" && (
                <div>
                    calendar:
                    <span className="wait-node__duration">{data?.calendar}</span>
                </div>
            )}
        </NodeWrapper>
    );
};

export default WaitNode;
