import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps } from "../NodeSettingsDialog.types";
import { ImmediatelyNodeData } from "../../../nodes/Node.types";

const ImmediatelyNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const immediatelyNodeData = data as ImmediatelyNodeData;

    const [nodeName, setNodeName] = useState(immediatelyNodeData.name);

    const applyChanges = () => {
        const newData = {
            ...immediatelyNodeData,
            name: nodeName,
        };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <>
                <div>
                    {/* <label>
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
                            onChange={(e) => setNodeName(e.target.value)}
                            placeholder="type node name..."
                        />
                    </label> */}
                </div>
            </>
        ),
        applyChanges,
    };
};

export default ImmediatelyNodeSettings;
