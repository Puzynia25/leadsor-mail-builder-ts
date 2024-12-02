import { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";
import { NodeData } from "./Node.types";
import CustomNodeToolbar from "../customNodeToolbar/CustomNodeToolbar";

import "./NodeWrapper.scss";

interface NodeWrapperProps {
    id: string;
    data: NodeData;
    selected?: boolean;
    children: ReactNode;
    handle: "left" | "right" | "all";
}

const NodeWrapper = ({ id, data, selected, children, handle }: NodeWrapperProps) => {
    return (
        <>
            <div>
                {(handle === "left" || handle === "all") && (
                    <Handle type="target" position={Position.Left} id={`${id}-target`} />
                )}
                <div className="node__wrapper-content" tabIndex={0}>
                    <p className="node__wrapper-label" style={{ backgroundColor: data.color }}>
                        {data.label}
                    </p>
                    <div className="node__wrapper-child">{children}</div>
                </div>
                {(handle === "right" || handle === "all") && (
                    <Handle type="source" position={Position.Right} id={`${id}-source`} />
                )}
            </div>
            <CustomNodeToolbar data={data} selected={selected} nodeId={id} />
        </>
    );
};

export default NodeWrapper;
