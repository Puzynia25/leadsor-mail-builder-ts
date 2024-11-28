import { useRef, useState } from "react";
import { Box, Button, TextField, IconButton, TextareaAutosize, Divider } from "@mui/material";
import { Edit, DeleteRounded } from "@mui/icons-material";
import { ISettingsMenu, ISettingsMenuProps } from "./SettingsMenu.types";
import { IBtn, ImmediatelyNodeData, ImmediatelyNodeType } from "../nodes/Node.types";
import { v4 as uuidv4 } from "uuid";

const MessageSettings = ({ node, onUpdateNodeContent }: ISettingsMenuProps): ISettingsMenu => {
    const immediatelyNode = node as ImmediatelyNodeType;

    const buttonTextRef = useRef<HTMLInputElement>(null);
    const buttonRefs = useRef<{ [key: string]: HTMLInputElement }>({});

    const [nodeText, setNodeText] = useState(immediatelyNode.data.text);

    const handleUpdateNodeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newData: ImmediatelyNodeData = {
            ...immediatelyNode.data,
            text: e.target.value,
        };

        setNodeText(e.target.value);
        onUpdateNodeContent(immediatelyNode.id, createNewNode(newData));
    };

    const createNewNode = (newData: ImmediatelyNodeData): ImmediatelyNodeType => {
        const newNode: ImmediatelyNodeType = {
            ...immediatelyNode,
            data: newData,
        };

        return newNode;
    };

    const handleAddButtonClick = () => {
        const buttonText = buttonTextRef.current?.value;

        if (buttonText) {
            const newButton = {
                id: uuidv4(),
                text: buttonText,
            };
            const newData: ImmediatelyNodeData = {
                ...immediatelyNode.data,
                buttons: [...(immediatelyNode.data.buttons ?? []), newButton],
            };
            onUpdateNodeContent(immediatelyNode.id, createNewNode(newData));
            buttonTextRef.current.value = "";
        }
    };

    const handleUpdateButton = (btnId: string) => {
        const data = immediatelyNode.data;
        const newText = buttonRefs[btnId]?.value;

        const newData: ImmediatelyNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.map((btn) => (btn.id === btnId ? { ...btn, text: newText } : btn)),
        };

        onUpdateNodeContent(immediatelyNode.id, createNewNode(newData));
    };

    const handleDeleteButton = (btnId: string) => {
        const data = immediatelyNode.data;

        const newData: ImmediatelyNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.filter((btn) => btn.id !== btnId),
        };

        onUpdateNodeContent(immediatelyNode.id, createNewNode(newData));
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

    const btns = immediatelyNode.data.buttons && (
        <>
            <div>Current buttons:</div>
            <div>{renderButtons(immediatelyNode.data.buttons)}</div>
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

export default MessageSettings;
