import CollectDataButton from "../collectDataButton/collectDataButton";
import logo from "../../assets/logo.svg";

import "./AppHeader.scss";

const AppHeader = () => {
    return (
        <div className="app__header">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <CollectDataButton />
        </div>
    );
};

export default AppHeader;
