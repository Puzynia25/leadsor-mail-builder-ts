import Sidebar from "./components/sidebar/Sidebar";
import CustomReactFlow from "./components/customReactFlow/CustomReactFlow";

import "./App.scss";
import { useState } from "react";
import { Node } from "@xyflow/react";
import SettingsMenu from "./components/settingsMenu/SettingsMenu";

const App = () => {
    const [settingNode, setSettingNode] = useState<Node | null>(null);
    const [showSettingsMenu, setShowSettingsMenu] = useState(false);

    const handleNodeClick: (e: React.MouseEvent, node: Node | null) => void = (_e, node) => {
        setShowSettingsMenu(true);
        setSettingNode(node);
    };

    const handleCloseSettingMenu: () => void = () => {
        setShowSettingsMenu(false);
        setSettingNode(null);
    };

    return (
        <div className="app-wrapper">
            <Sidebar />
            <CustomReactFlow handleNodeClick={handleNodeClick} />

            {showSettingsMenu && <SettingsMenu node={settingNode} onClose={handleCloseSettingMenu} />}
        </div>
    );
};

export default App;
