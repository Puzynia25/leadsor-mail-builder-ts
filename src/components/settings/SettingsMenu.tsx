import { Button } from "@mui/material";
import { useSettingsMenu } from "../../hooks/useSettingsMenu";
import { ISettingsMenuProps } from "./SettingsMenu.types";

import "./SettingsMenu.scss";

const SettingsMenu = ({ node, onClose, onUpdateNodeContent }: ISettingsMenuProps) => {
    const data: ISettingsMenuProps = {
        node,
        onUpdateNodeContent,
    };

    const { render } = useSettingsMenu(node.data.label, data);

    return (
        <section>
            <div className="overlay-dark" />
            <div className="settings-menu__wrapper">
                <h6 className="settings-menu__title">{node.data.label}</h6>
                <div className="divider" />
                <div className="settings-menu__content">
                    <div className="settings-menu__inner">{render}</div>
                    <div className="btn-wrapper">
                        <Button variant="contained" color="success" onClick={onClose}>
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SettingsMenu;
