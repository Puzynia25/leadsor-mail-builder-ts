import { Button } from "@mui/material";
import { useNodeEditor } from "../../hooks/useNodeEditor";
import { INodeEditorProps } from "./NodeEditorWrapper.types";

import "./NodeEditorWrapper.scss";

const NodeEditorWrapper = ({ type, data, onClose, onUpdateNodeContent }: INodeEditorProps) => {
    const { render, applyChanges } = useNodeEditor({ type, data, onUpdateNodeContent });

    const handleApply = () => {
        if (applyChanges) {
            applyChanges();
        }
        onClose();
    };

    return (
        <section>
            <div className="overlay-dark" />
            <div className="node-editor__wrapper">
                <div className="node-editor__title">
                    <h6>{data.label}</h6>
                    <div className="divider" />
                </div>
                <div className="node-editor__inner">
                    <div className="node-editor__content">{render}</div>
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

export default NodeEditorWrapper;
