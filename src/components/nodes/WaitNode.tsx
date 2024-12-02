import { NodeProps } from "@xyflow/react";
import { WaitNodeType } from "./Node.types";
import NodeWrapper from "./NodeWrapper";

import "./WaitNode.scss";

const WaitNode = ({ id, data }: NodeProps<WaitNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            <p className="wait-node__text">
                some delay...
                {/* <span className="wait-node__duration">{data.wait}</span>
                {data.timeRange} */}
            </p>
        </NodeWrapper>
    );
};

export default WaitNode;
