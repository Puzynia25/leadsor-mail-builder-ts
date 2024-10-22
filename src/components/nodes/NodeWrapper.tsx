import { FC, ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";

import "./NodeWrapper.scss";
import { NodeData } from "./Node.types";

const NodeWrapper: FC<{ id: string; data: NodeData; children: ReactNode }> = ({ id, data, children }) => {
    return (
        <>
            <Handle type="target" position={Position.Left} id={`${id}-target`} className="handle" />
            <div className="node-wrapper" tabIndex={0}>
                <div className="node-content">
                    <p className="node-label" style={{ backgroundColor: data.color }}>
                        {data.label}
                    </p>
                    {children}
                </div>
            </div>
            <Handle type="source" position={Position.Right} id={`${id}-source`} className="handle" />
        </>
    );
};

export default NodeWrapper;
