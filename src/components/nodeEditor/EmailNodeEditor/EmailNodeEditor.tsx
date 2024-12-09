import { useState } from "react";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "../NodeEditorWrapper.types";
import { EmailNodeData } from "../../nodes/Node.types";
import { EditOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";

import "./EmailNodeEditor.scss";

const EmailNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const emailNodeData = data as EmailNodeData;

    const [email, setEmail] = useState(emailNodeData.email ?? "some email");

    const applyChanges = () => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            email,
        };

        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">Email to be sent:</p>
                    <div className="wait-node-editor__select">
                        <Select
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ width: "100%", bgcolor: "#ffff" }}>
                            <MenuItem value={email}>{email}</MenuItem>
                        </Select>
                    </div>
                </div>

                <div>
                    <p className="wait-node-editor__item-title">Email subject:</p>
                    <div className="wait-node-editor__select">
                        <TextField value="" size="medium" sx={{ width: "100%", bgcolor: "#ffff" }} />
                    </div>
                </div>

                <div className="wait-node-editor__preview">
                    <Button variant="contained" sx={{ bgcolor: "ButtonText", opacity: "0.5" }}>
                        <RemoveRedEyeOutlined fontSize="small" sx={{ marginRight: "7px" }} /> Preview
                    </Button>
                    <Button variant="contained" sx={{ bgcolor: "ButtonText", opacity: "0.5" }}>
                        <EditOutlined fontSize="small" sx={{ marginRight: "7px" }} /> Edit email
                    </Button>
                </div>
            </div>
        ),
        applyChanges,
    };
};

export default EmailNodeEditor;
