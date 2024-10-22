import { NodeProps } from "@xyflow/react";
import { PauseNodeType } from "./Node.types";
import NodeWrapper from "./NodeWrapper";

import "./PauseNode.scss";

const PauseNode = ({ id, data }: NodeProps<PauseNodeType>) => {
    return (
        <NodeWrapper id={id} data={data}>
            <div className="pause-content__wrapper">
                <p className="pause-content__text">
                    Delay
                    <span className="pause-content__duration">{data.pause}</span>
                    {data.timeRange}
                </p>
            </div>
        </NodeWrapper>
    );
};

export default PauseNode;
