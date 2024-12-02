import { useState } from "react";
import { TextareaAutosize } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { EmailNodeData } from "../nodes/Node.types";

const EmailNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const emailNodeData = data as EmailNodeData;

    // const [nodeName, setNodeName] = useState(emailNodeData.name);

    const handleUpdateNodeName = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // const newData: EmailNodeData = {
        //     ...emailNodeData,
        //     name: e.target.value,
        // };

        // setNodeName(e.target.value);
        // onUpdateNodeContent(newData);
        console.log("handleUpdateNodeName");
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
                            value="{nodeName}"
                            onChange={handleUpdateNodeName}
                            placeholder="type node name..."
                        />
                    </label>
                </div>
            </>
        ),
    };
};

export default EmailNodeEditor;
