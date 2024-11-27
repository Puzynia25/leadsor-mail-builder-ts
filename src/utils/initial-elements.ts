import { Edge } from "@xyflow/react";
import { CustomNodeType } from "../components/nodes/Node.types";

export const initialNodes: CustomNodeType[] = [
    {
        id: "start-node",
        position: { x: 50, y: 50 },
        data: { label: "Start", color: "#34a853" },
        draggable: false,
        deletable: false,
        type: "start",
    },
];

export const initialEdges: Edge[] = [];
