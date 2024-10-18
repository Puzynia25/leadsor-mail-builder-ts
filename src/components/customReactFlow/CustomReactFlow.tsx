import { FC } from "react";
import { useCallback, useState } from "react";
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    NodeChange,
    EdgeChange,
    Connection,
    Edge,
    Node,
    useReactFlow,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

import { calculateNodePosition, nodeTypes } from "../../utils";
import { SidebarItem } from "../../constants/sidebarItems";

import "./CustomReactFlow.scss";

const CustomReactFlow: FC<{ handleNodeClick: (e: React.MouseEvent, node: Node | null) => void }> = ({
    handleNodeClick,
}) => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const { getViewport } = useReactFlow();

    const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const onDrop: (e: React.DragEvent) => void = (e) => {
        e.preventDefault();
        const reactFlowBounds: DOMRect = e.currentTarget.getBoundingClientRect();
        const sideBarItemData: string = e.dataTransfer.getData("application/reactflow");

        if (!sideBarItemData) {
            return;
        }

        const sideBarItem: SidebarItem = JSON.parse(sideBarItemData);

        const newNode: Node = {
            id: uuidv4(),
            data: {
                label: sideBarItem.label,
            },
            position: calculateNodePosition(e, getViewport, reactFlowBounds),
            type: "custom",
        };

        setNodes((nds) => [...nds, newNode]);
    };

    const onDragOver: (e: React.DragEvent) => void = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    return (
        <div className="custom-rf__wrapper" onDrop={onDrop} onDragOver={onDragOver}>
            <ReactFlow
                className="custom-rf__content"
                nodes={nodes}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
                onConnect={onConnect}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                nodeOrigin={[0.5, 0.5]}
            />
        </div>
    );
};

export default CustomReactFlow;
