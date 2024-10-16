import { FC, useCallback, useState } from "react";
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    useReactFlow,
    NodeChange,
    EdgeChange,
    Connection,
    Edge,
    NodeProps,
    Node,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

import Sidebar from "./components/sidebar/Sidebar";
import CustomNode from "./components/customNode/CustomNode";

import "./App.scss";

const nodeTypes: { [key: string]: FC<NodeProps> } = { custom: CustomNode };

const App = () => {
    const [nodes, setNodes] = useState<Node[]>([
        { id: "1", position: { x: 0, y: 0 }, data: { label: "Message" } },
        { id: "2", position: { x: 100, y: 100 }, data: { label: "Pause" } },
        { id: "3", position: { x: 200, y: 200 }, data: { label: "Filter" } },
    ]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const { getViewport } = useReactFlow();

    const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), []);

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const reactFlowBounds = e.currentTarget.getBoundingClientRect();
        const nodeData = e.dataTransfer.getData("application/reactflow");

        if (!nodeData) {
            return;
        }

        const node = JSON.parse(nodeData);

        const { x: scaleX, y: scaleY, zoom } = getViewport();

        const position = {
            x: (e.clientX - reactFlowBounds.left - scaleX) / zoom,
            y: (e.clientY - reactFlowBounds.top - scaleY) / zoom,
        };

        const newNode = {
            id: uuidv4(),
            data: { ...node.data },
            position,
            type: "custom",
        };

        setNodes((nds) => [...nds, newNode]);
    };

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    return (
        <div className="app-wrapper">
            <Sidebar />

            <div className="reactflow-wrapper" onDrop={onDrop} onDragOver={onDragOver}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onNodesChange={onNodesChange}
                    onConnect={onConnect}
                    nodeTypes={nodeTypes}
                    nodeOrigin={[0.5, 0.5]}
                    className="reactflow-content"
                />
            </div>
        </div>
    );
};

export default App;
