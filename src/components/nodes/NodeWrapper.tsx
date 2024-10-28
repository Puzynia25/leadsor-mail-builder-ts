import { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";

import "./NodeWrapper.scss";
import { NodeData } from "./Node.types";

const NodeWrapper = ({
    id,
    data,
    children,
    handle,
}: {
    id: string;
    data: NodeData;
    children: ReactNode;
    handle: "left" | "right" | "all";
}) => {
    return (
        <div>
            {(handle === "left" || handle === "all") && (
                <Handle type="target" position={Position.Left} id={`${id}-target`} />
            )}
            <div className="node-wrapper" tabIndex={0}>
                <p className="node-label" style={{ backgroundColor: data.color }}>
                    {data.label}
                </p>
                <div className="node-content">{children}</div>
            </div>
            {(handle === "right" || handle === "all") && (
                <Handle type="source" position={Position.Right} id={`${id}-source`} />
            )}
        </div>
    );
};

export default NodeWrapper;
