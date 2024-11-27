import { useCallback, useState } from "react";
import { addEdge, Edge, OnConnect, useEdgesState, useNodesState } from "@xyflow/react";
import AppHeader from "./components/appHeader/AppHeader";
import Sidebar from "./components/sidebar/Sidebar";
import CustomReactFlow from "./components/customReactFlow/CustomReactFlow";
import SettingsMenu from "./components/settings/SettingsMenu";
import { CustomNodeType } from "./components/nodes/Node.types";
import { Divider } from "@mui/material";
import { initialEdges, initialNodes } from "./utils/initial-elements";

import "./App.scss";

const App = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [settingNode, setSettingNode] = useState<CustomNodeType | null>(null);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const handleNodeClick: (e: React.MouseEvent, node: CustomNodeType | null) => void = (_e, node) => {
        if (node?.type !== "start") {
            setShowSettingsMenu(true);
        }

        setSettingNode(node);
    };

    const handleCloseSettingMenu: () => void = () => {
        setShowSettingsMenu(false);
        setSettingNode(null);
    };

    const handleUpdateNodeContent = (nodeId: string, newNode: CustomNodeType) => {
        const changedNodes = (nodes: CustomNodeType[]): CustomNodeType[] => {
            return nodes.map((node) => {
                if (node.id === nodeId) {
                    if (settingNode && settingNode.id === nodeId) {
                        setSettingNode(newNode);
                    }

                    return newNode;
                }
                return node;
            });
        };

        setNodes((nds) => changedNodes(nds as CustomNodeType[]));
    };

    return (
        <div className="app__wrapper">
            <AppHeader />
            <Divider />
            <div className="app__container">
                <Sidebar />
                <CustomReactFlow
                    nodes={nodes}
                    edges={edges}
                    handleNodeClick={handleNodeClick}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                />

                {showSettingsMenu && settingNode && (
                    <SettingsMenu
                        node={settingNode}
                        onClose={handleCloseSettingMenu}
                        onUpdateNodeContent={handleUpdateNodeContent}
                    />
                )}
            </div>
        </div>
    );
};

export default App;
