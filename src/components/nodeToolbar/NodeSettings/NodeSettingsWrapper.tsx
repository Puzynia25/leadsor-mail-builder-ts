import { Button } from "@mui/material";
import { useNodeSettings } from "../../../hooks/useNodeSettings";
import { INodeSettingsWrapperProps } from "./NodeSettingsWrapper.types";
import SectionTitle from "../../common/SectionTitle/SectionTitle";

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
                <SectionTitle label={data.label} color={data.color} />
                <div className="node-settings__inner">
                    <div className="node-settings__content">{render}</div>
                    <div className="btn-wrapper">
                        <Button variant="contained" sx={{ bgcolor: "#1e1e1e" }} onClick={handleApply}>
                            Apply
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NodeSettingsWrapper;
