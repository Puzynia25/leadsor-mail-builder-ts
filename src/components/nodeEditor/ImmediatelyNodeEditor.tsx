import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { ImmediatelyNodeData } from "../nodes/Node.types";

const ImmediatelyNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const immediatelyNodeData = data as ImmediatelyNodeData;

    const [nodeName, setNodeName] = useState("");

    const handleUpdateNodeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newData: ImmediatelyNodeData = {
            ...immediatelyNodeData,
            name: e.target.value,
        };

        setNodeName(e.target.value);
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <>
                <div>
                    <TextareaAutosize
                        minRows={3}
                        style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "15px",
                            borderColor: "lightgray",
                            resize: "vertical",
                        }}
                        value={nodeName}
                        onChange={handleUpdateNodeName}
                        placeholder="type node name..."
                    />
                </div>
            </>
        ),
    };
};

export default ImmediatelyNodeEditor;
