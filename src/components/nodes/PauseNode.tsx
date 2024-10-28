import { NodeProps } from "@xyflow/react";
import { PauseNodeType } from "./Node.types";
import NodeWrapper from "./NodeWrapper";

import "./PauseNode.scss";

const PauseNode = ({ id, data }: NodeProps<PauseNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            <p className="pause-node__text">
                Delay
                <span className="pause-node__duration">{data.pause}</span>
                {data.timeRange}
            </p>
        </NodeWrapper>
    );
};

export default PauseNode;
