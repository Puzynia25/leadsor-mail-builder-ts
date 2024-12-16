import { useCallback, useState } from "react";
import { addEdge, Edge, OnConnect, useEdgesState, useNodesState } from "@xyflow/react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import FlowWrapper from "./components/flowWrapper/FlowWrapper";
import { Divider } from "@mui/material";
import { initialEdges, initialNodes } from "./components/flowWrapper/initialElements";
import { CommonNodeData, CustomNodeType } from "./components/nodes/Node.types";
import NodeSettingsDialog from "./components/nodeToolbar/NodeSettingsDialog/NodeSettingsDialog";
import ContactsDialog from "./components/nodeToolbar/ContactsDialog/ContactsDialog";
import { Contact } from "./components/nodeToolbar/ContactsDialog/ContactsDialog.types";
import { contactsList } from "./utils/contacts";

import "./App.scss";

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const [selectedNode, setSelectedNode] = useState<CustomNodeType | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isContactsOpen, setIsContactsOpen] = useState(false);

    const [contacts, setContacts] = useState<Contact[]>(contactsList);

    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const handleEditNode = (nodeId: string) => {
        const node = nodes.find((n) => n.id === nodeId);
        if (node) {
            setSelectedNode(node);
            setIsSettingsOpen(true);
        }
    };

    const handleCloseSettings = () => {
        setIsSettingsOpen(false);
        setSelectedNode(null);
    };

    const handleUpdateNodeContent = (updatedData: Partial<CommonNodeData>) => {
        if (!selectedNode) return;

        setNodes(
            (nds) =>
                nds.map((n) =>
                    n.id === selectedNode.id ? { ...n, data: { ...n.data, ...updatedData } } : n
                ) as CustomNodeType[]
        );
    };

    const handleOpenContacts = (nodeId: string) => {
        const node = nodes.find((n) => n.id === nodeId);
        if (node) {
            setSelectedNode(node);
            setIsContactsOpen(true);
        }
    };

    const handleCloseContacts = () => {
        setIsContactsOpen(false);
        setSelectedNode(null);
    };

    return (
        <div className="app__wrapper">
            <Header />
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
                    onOpenContacts={handleOpenContacts}
                />
            </div>

            {isSettingsOpen && selectedNode && (
                <NodeSettingsDialog
                    open={isSettingsOpen}
                    onClose={handleCloseSettings}
                    type={selectedNode.type ?? ""}
                    data={selectedNode.data}
                    onUpdateNodeContent={handleUpdateNodeContent}
                />
            )}

            {isContactsOpen && selectedNode && (
                <ContactsDialog
                    open={isContactsOpen}
                    onClose={handleCloseContacts}
                    contacts={contacts}
                    data={selectedNode.data}
                />
            )}
        </div>
    );
};

export default App;
