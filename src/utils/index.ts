import { NodeProps } from "@xyflow/react";
import { FC } from "react";
import CustomNode from "../components/customNode/CustomNode";
import { NodeLabel } from "../hooks/useNode";

export const calculateNodePosition = (
    e: React.DragEvent,
    getViewport: () => { x: number; y: number; zoom: number },
    position: DOMRect
): { x: number; y: number } => {
    const { x: scaleX, y: scaleY, zoom } = getViewport();

    const canvasPosition = {
        x: (e.clientX - position.left - scaleX) / zoom,
        y: (e.clientY - position.top - scaleY) / zoom,
    };
    return canvasPosition;
};

export const nodeTypes: { [key: string]: FC<NodeProps> } = { custom: CustomNode };
