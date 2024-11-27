import { Handle, NodeProps, Position } from "@xyflow/react";
import { StartNodeType } from "./Node.types";

import "./StartNode.scss";

const StartNode = ({ id, data }: NodeProps<StartNodeType>) => {
    return (
        <div className="start-node__wrapper">
            <p className="start-node__text">Start</p>
            <Handle type="source" position={Position.Right} id={`${id}-source`} />
        </div>
    );
};

export default StartNode;
