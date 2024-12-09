import { Button } from "@mui/material";
import { useNodeSettings } from "../../../hooks/useNodeSettings";
import { INodeSettingsWrapperProps } from "./NodeSettingsWrapper.types";

import "./NodeSettingsWrapper.scss";

const NodeSettingsWrapper = ({ type, data, onClose, onUpdateNodeContent }: INodeSettingsWrapperProps) => {
    const { render, applyChanges } = useNodeSettings({ type, data, onUpdateNodeContent });

    const handleApply = () => {
        if (applyChanges) {
            applyChanges();
        }
        onClose();
    };

    return (
        <section>
            <div className="overlay-dark" />
            <div className="node-settings__wrapper">
                <div className="node-settings__title">
                    <h6>{data.label}</h6>
                    <div className="divider" />
                </div>
                <div className="node-settings__inner">
                    <div className="node-settings__content">{render}</div>
                    <div className="btn-wrapper">
                        <Button variant="contained" color="success" onClick={handleApply}>
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NodeSettingsWrapper;
