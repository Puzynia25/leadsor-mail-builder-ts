import { useState } from "react";
import { Edge } from "@xyflow/react";
import AppHeader from "./components/appHeader/AppHeader";
import Sidebar from "./components/sidebar/Sidebar";
import CustomReactFlow from "./components/customReactFlow/CustomReactFlow";
import SettingsMenu from "./components/settings/SettingsMenu";
import { CustomNodeType } from "./components/nodes/Node.types";
import { Divider } from "@mui/material";

import "./App.scss";

const App = () => {
    const [nodes, setNodes] = useState<CustomNodeType[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const [settingNode, setSettingNode] = useState<CustomNodeType | null>(null);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const handleNodeClick: (e: React.MouseEvent, node: CustomNodeType | null) => void = (_e, node) => {
        setShowSettingsMenu(true);
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

        setNodes((nds) => changedNodes(nds));
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
                    setNodes={setNodes}
                    setEdges={setEdges}
                    handleNodeClick={handleNodeClick}
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
