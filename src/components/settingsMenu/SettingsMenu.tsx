import { Box, Button, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { Node } from "@xyflow/react";

// import useSettingsMenu from "../../hooks/useSettingsMenu";
import "./SettingsMenu.scss";

const SettingsMenu: FC<{ node: Node | null; onClose: () => void }> = ({ node, onClose }) => {
    // const data = {
    //     node,
    //     onUpdateNodeText,
    //     onAddButtonToNode,
    //     onUpdateButton,
    //     onDeleteButton,
    //     onUpdateNodePause,
    // };

    // const { content } = useSettingsMenu(node.data.label, data);

    return (
        <section>
            <div className="overlay-dark" />
            <div className="settings-menu__wrapper">
                <h6 className="settings-menu__title">{node.data.label}</h6>
                <div className="divider" />
                <div className="settings-menu__content">
                    {/* <Box p={2}>{content}</Box> */}
                    <div>Something...</div>
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
