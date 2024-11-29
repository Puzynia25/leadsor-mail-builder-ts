import { useRef, useState } from "react";
import { Box, Button, TextField, IconButton, TextareaAutosize, Divider } from "@mui/material";
import { Edit, DeleteRounded } from "@mui/icons-material";
import { INodeEditor, INodeEditorProps } from "./NodeEditor.types";
import { IBtn, ImmediatelyNodeData } from "../nodes/Node.types";
import { v4 as uuidv4 } from "uuid";

const ImmediatelyNodeEditor = ({ data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const immediatelyNodeData = data as ImmediatelyNodeData;

    const buttonTextRef = useRef<HTMLInputElement>(null);
    const buttonRefs = useRef<{ [key: string]: HTMLInputElement }>({});

    const [nodeText, setNodeText] = useState("");

    const handleUpdateNodeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newData: ImmediatelyNodeData = {
            ...immediatelyNodeData,
            text: e.target.value,
        };

        setNodeText(e.target.value);
        onUpdateNodeContent(newData);
    };

    const handleAddButtonClick = () => {
        const buttonText = buttonTextRef.current?.value;

        if (buttonText) {
            const newButton = {
                id: uuidv4(),
                text: buttonText,
            };
            const newData: ImmediatelyNodeData = {
                ...immediatelyNodeData,
                buttons: [...(immediatelyNodeData.buttons ?? []), newButton],
            };
            onUpdateNodeContent(newData);
            buttonTextRef.current.value = "";
        }
    };

    const handleUpdateButton = (btnId: string) => {
        const data = immediatelyNodeData;
        const newText = buttonRefs[btnId]?.value;

        const newData: ImmediatelyNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.map((btn) => (btn.id === btnId ? { ...btn, text: newText } : btn)),
        };

        onUpdateNodeContent(newData);
    };

    const handleDeleteButton = (btnId: string) => {
        const data = immediatelyNodeData;

        const newData: ImmediatelyNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.filter((btn) => btn.id !== btnId),
        };

        onUpdateNodeContent(newData);
    };

    const renderButtons = (btns: IBtn[]) => {
        if (!btns || btns.length === 0) {
            return <div>There are no buttons</div>;
        }

        return btns.map((btn) => (
            <Box key={btn.id} display="flex" alignItems="center" marginY={2}>
                <TextField
                    placeholder={btn.text}
                    fullWidth
                    size="small"
                    inputRef={(el) => (buttonRefs[btn.id] = el)}
                    className="text-field"
                />
                <IconButton aria-label="edit" onClick={() => handleUpdateButton(btn.id)} sx={{ marginLeft: "5px" }}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeleteButton(btn.id)} color="error" aria-label="delete">
                    <DeleteRounded />
                </IconButton>
            </Box>
        ));
    };

    const btns = immediatelyNodeData.buttons && (
        <>
            <div>Current buttons:</div>
            <div>{renderButtons(immediatelyNodeData.buttons)}</div>
            <Divider />
        </>
    );

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
                        value={nodeText}
                        onChange={handleUpdateNodeText}
                        placeholder="type your message..."
                    />
                </div>

                {/* Current buttons */}
                <div className="btns__wrapper">{btns}</div>

                {/* Add button */}
                <div className="btns__wrapper">
                    <TextField
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        placeholder="type button text..."
                        inputRef={buttonTextRef}
                        className="text-field"
                    />
                    <Button
                        variant="outlined"
                        sx={{ border: "1px dashed darkgrey", color: "ButtonText" }}
                        fullWidth
                        onClick={handleAddButtonClick}>
                        + Add button
                    </Button>
                </div>
            </>
        ),
    };
};

export default ImmediatelyNodeEditor;
