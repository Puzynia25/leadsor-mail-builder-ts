import { useCallback, useState } from "react";
import { addEdge, Edge, OnConnect, useEdgesState, useNodesState } from "@xyflow/react";
import AppHeader from "./components/appHeader/AppHeader";
import Sidebar from "./components/sidebar/Sidebar";
import FlowWrapper from "./components/flowWrapper/FlowWrapper";
import { Divider } from "@mui/material";
import { initialEdges, initialNodes } from "./components/flowWrapper/initialElements";
import NodeEditor from "./components/nodeEditor/NodeEditor";
import { CustomNodeType } from "./components/nodes/Node.types";

import "./App.scss";

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [selectedNode, setSelectedNode] = useState(null);
    const [isEditorOpen, setIsEditorOpen] = useState(false);

    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const handleEditNode = (nodeId: string) => {
        const node: CustomNodeType = nodes.find((n) => n.id === nodeId);
        if (node) {
            setSelectedNode(node);
            setIsEditorOpen(true);
        }
    };

    const handleCloseEditor = () => {
        setIsEditorOpen(false);
        setSelectedNode(null);
    };

    const handleUpdateNodeContent = (updatedData) => {
        setNodes((nds) =>
            nds.map((n) => (n.id === selectedNode.id ? { ...n, data: { ...n.data, ...updatedData } } : n))
        );
    };

    return (
        <div className="app__wrapper">
            <AppHeader />
            <Divider />
            <div className="app__container">
                <Sidebar />
                <FlowWrapper
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onEditNode={handleEditNode}
                />
            </div>

            {isEditorOpen && selectedNode && (
                <NodeEditor
                    data={selectedNode.data}
                    onClose={handleCloseEditor}
                    onUpdateNodeContent={handleUpdateNodeContent}
                />
            )}
        </div>
    );
};

export default App;
