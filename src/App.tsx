import Sidebar from "./components/sidebar/Sidebar";
import CustomReactFlow from "./components/customReactFlow/CustomReactFlow";

import "./App.scss";

const App = () => {
    return (
        <div className="app-wrapper">
            <Sidebar />
            <CustomReactFlow />
        </div>
    );
};

export default App;
