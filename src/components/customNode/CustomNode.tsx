import { FC } from "react";
import { Handle, Position } from "@xyflow/react";
import useNode, { NodeLabel } from "../../hooks/useNode";

import "./CustomNode.scss";

const CustomNode: FC<{ id: string; data: { label: NodeLabel } }> = ({ id, data }) => {
    const { color, render } = useNode(data.label);

    return (
        <>
            <Handle type="target" position={Position.Left} id={`${id}-target`} className="handle" />
            <div className="node-wrapper" tabIndex={0}>
                <div className="node-content">
                    <p className="node-label" style={{ backgroundColor: color }}>
                        {data.label}
                    </p>
                    {render}
                </div>
            </div>
            <Handle type="source" position={Position.Right} id={`${id}-source`} className="handle" />
        </>
    );
};

export default CustomNode;
