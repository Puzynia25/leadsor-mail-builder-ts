import { useState } from "react";
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { EmailNodeData } from "../nodes/Node.types";
import { EditOutlined, RemoveRedEyeOutlined } from "@mui/icons-material";

import "./EmailNodeEditor.scss";

const EmailNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const emailNodeData = data as EmailNodeData;

    const [email, setEmail] = useState("some email");

    const handleUpdateEmail = (e: SelectChangeEvent<string>) => {
        const newData: EmailNodeData = {
            ...emailNodeData,
            email: e.target.value,
        };
        console.log(email, "handleUpdateCalendar");

        setEmail(e.target.value);
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="wait-node-editor__container">
                <div>
                    <p className="wait-node-editor__item-title">Email to be sent:</p>
                    <div className="wait-node-editor__select">
                        <Select value={email} onChange={handleUpdateEmail} sx={{ width: "100%", bgcolor: "#ffff" }}>
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
    };
};

export default EmailNodeEditor;