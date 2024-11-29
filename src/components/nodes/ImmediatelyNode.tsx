import { ImmediatelyNodeType } from "./Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "./NodeWrapper";

import "./ImmediatelyNode.scss";

const ImmediatelyNode = ({ id, data }: NodeProps<ImmediatelyNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            <p className="message-node__name">{data.text}</p>
        </NodeWrapper>
    );
};

export default ImmediatelyNode;
