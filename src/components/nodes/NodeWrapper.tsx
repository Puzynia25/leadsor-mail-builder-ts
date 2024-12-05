import { ReactNode } from "react";
import { Handle, Position } from "@xyflow/react";
import { NodeData } from "./Node.types";
import CustomNodeToolbar from "../customNodeToolbar/CustomNodeToolbar";
import * as Icons from "@mui/icons-material";

import "./NodeWrapper.scss";

interface NodeWrapperProps {
    id: string;
    data: NodeData;
    selected?: boolean;
    children: ReactNode;
    handle: "left" | "right" | "all";
}

const NodeWrapper = ({ id, data, selected, children, handle }: NodeWrapperProps) => {
    const IconComponent = data.icon && Icons[data.icon as keyof typeof Icons];

    return (
        <>
            <div>
                {(handle === "left" || handle === "all") && (
                    <Handle type="target" position={Position.Left} id={`${id}-target`} />
                )}
                <div className="node__wrapper-content" tabIndex={0}>
                    <div className="node__wrapper-title" style={{ backgroundColor: data.color }}>
                        {IconComponent ? <IconComponent fontSize="medium" sx={{ color: "#fff" }} /> : null}
                        <p className="node__wrapper-label">{data.label}</p>
                    </div>
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
