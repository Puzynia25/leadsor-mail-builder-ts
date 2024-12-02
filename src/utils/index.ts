import { Edge, getOutgoers, NodeTypes } from "@xyflow/react";
import ImmediatelyNode from "../components/nodes/ImmediatelyNode";
import StartNode from "../components/nodes/StartNode";
import ConditionNode from "../components/nodes/conditionNode/ConditionNode";
import WaitNode from "../components/nodes/WaitNode";
import { CustomNodeType, IBtn } from "../components/nodes/Node.types";
import { v4 as uuidv4 } from "uuid";

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

export const notBtn: IBtn = {
    id: uuidv4(),
    text: "NOT",
};

export const collectChainData = (
    startNode: CustomNodeType,
    allNodes: CustomNodeType[],
    allEdges: Edge[]
): CustomNodeType[] => {
    const chain: CustomNodeType[] = [];
    const visited = new Set<string>();

    const traverse = (node: CustomNodeType) => {
        if (!node || visited.has(node.id)) return;
        visited.add(node.id);
        chain.push(node);

        const outgoers = getOutgoers(node, allNodes, allEdges);
        // console.log(outgoers, "outgoers");
        outgoers.forEach(traverse);
    };

    traverse(startNode);

    return chain;
};
