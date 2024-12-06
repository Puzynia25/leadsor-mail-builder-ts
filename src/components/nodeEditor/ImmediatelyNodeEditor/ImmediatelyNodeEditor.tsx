import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "../NodeEditorWrapper.types";
import { ImmediatelyNodeData } from "../../nodes/Node.types";

const ImmediatelyNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const immediatelyNodeData = data as ImmediatelyNodeData;

    const [nodeName, setNodeName] = useState(immediatelyNodeData.name);

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
                    <label>
                        <p>
                            <b>Node name:</b>
                        </p>

                        <TextareaAutosize
                            minRows={3}
                            style={{
                                width: "100%",
                                marginTop: "10px",
                                padding: "8px",
                                borderRadius: "15px",
                                borderColor: "lightgray",
                                resize: "vertical",
                            }}
                            value={nodeName}
                            onChange={handleUpdateNodeName}
                            placeholder="type node name..."
                        />
                    </label>
                </div>
            </>
        ),
    };
};

export default ImmediatelyNodeEditor;
