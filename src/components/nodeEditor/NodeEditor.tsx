import { Button } from "@mui/material";
import { useNodeEditor } from "../../hooks/useNodeEditor";
import { INodeEditorProps } from "./NodeEditor.types";

import "./NodeEditor.scss";

const NodeEditor = ({ data, onClose, onUpdateNodeContent }: INodeEditorProps) => {
    const nodeData: INodeEditorProps = {
        data,
        onUpdateNodeContent,
    };

    const { render, applyChanges } = useNodeEditor(data.label, nodeData);

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
                <h6 className="node-editor__title">{data.label}</h6>
                <div className="divider" />
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

export default NodeEditor;
