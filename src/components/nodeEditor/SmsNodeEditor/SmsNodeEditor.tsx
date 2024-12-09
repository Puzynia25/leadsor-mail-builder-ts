import { useState } from "react";
import { MenuItem, Select, TextareaAutosize } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "../NodeEditorWrapper.types";
import { SmsNodeData } from "../../nodes/Node.types";

const SmsNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const smsNodeData = data as SmsNodeData;

    const [sender, setSender] = useState(smsNodeData.sender ?? "some sender");
    const [message, setMessage] = useState(smsNodeData.message ?? "");

    const applyChanges = () => {
        const newData: SmsNodeData = { ...smsNodeData, sender, message };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">SMS message to be sent:</p>
                    <div className="wait-node-editor__select">
                        <Select
                            value={sender}
                            onChange={(e) => setSender(e.target.value)}
                            sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value={sender}>{sender}</MenuItem>
                        </Select>
                    </div>
                </div>

                <div>
                    <div className="wait-node-editor__select">
                        <p className="wait-node-editor__item-title">SMS message:</p>
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
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="type sms message..."
                        />
                    </div>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default SmsNodeEditor;
