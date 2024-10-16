import { FC } from "react";

import { Box, Card, CardContent, Typography } from "@mui/material";
import { Handle, NodeProps, Position } from "@xyflow/react";

import "./CustomNode.scss";
// import useNode from "../hooks/useNode";

const CustomNode: FC<NodeProps> = ({ id, data }) => {
    // const { color, content } = useNode(data.label, data);
    const color = "#2b7e2f";
    const content = (
        <div>
            <p className="node-title">{data.text}</p>
        </div>
    );

    return (
        <>
            <Handle type="target" position={Position.Left} id={`${id}-target`} className="handle" />
            <div className="node-wrapper" tabIndex={0}>
                <div className="node-content">
                    <p className="node-label" style={{ backgroundColor: color }}>
                        {data.label}
                    </p>
                    {content}
                </div>
            </div>
            <Handle type="source" position={Position.Right} id={`${id}-source`} className="handle" />
        </>
    );
};

export default CustomNode;
