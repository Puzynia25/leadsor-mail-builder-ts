import { useRef, useState } from "react";
import { Box, Button, TextField, IconButton, TextareaAutosize } from "@mui/material";
import { Edit, DeleteRounded } from "@mui/icons-material";
import { ISettingsMenu, ISettingsMenuProps } from "./SettingsMenu.types";
import { IBtn, MessageNodeData, MessageNodeType } from "../nodes/Node.types";
import { v4 as uuidv4 } from "uuid";

const MessageSettings = ({ node, onUpdateNodeContent }: ISettingsMenuProps): ISettingsMenu => {
    const messageNode = node as MessageNodeType;
    // const [messageNode, setMessageNode] = useState(node as MessageNodeProps);

    const buttonTextRef = useRef<HTMLInputElement>(null);
    const buttonRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

    const [nodeText, setNodeText] = useState(messageNode.data.text);

    const handleUpdateNodeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newData: MessageNodeData = {
            ...messageNode.data,
            text: e.target.value,
        };

        setNodeText(e.target.value);
        onUpdateNodeContent(messageNode.id, createNewNode(newData));
    };

    const createNewNode = (newData: MessageNodeData): MessageNodeType => {
        const newNode: MessageNodeType = {
            ...messageNode,
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
            const newData: MessageNodeData = {
                ...messageNode.data,
                buttons: [...(messageNode.data.buttons ?? []), newButton],
            };
            onUpdateNodeContent(messageNode.id, createNewNode(newData));
            buttonTextRef.current.value = "";
        }
    };

    const handleUpdateButton = (btnId: string) => {
        const data = messageNode.data;
        const newText = buttonRefs[btnId]?.value;

        const newData: MessageNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.map((btn) => (btn.id === btnId ? { ...btn, text: newText } : btn)),
        };

        onUpdateNodeContent(messageNode.id, createNewNode(newData));
    };

    const handleDeleteButton = (btnId: string) => {
        const data = messageNode.data;

        const newData: MessageNodeData = {
            ...data,
            buttons: data.buttons && data.buttons.filter((btn) => btn.id !== btnId),
        };

        onUpdateNodeContent(messageNode.id, createNewNode(newData));
    };

    const renderButtons = (btns: IBtn[]) => {
        if (!btns || btns.length === 0) {
            return null;
        }

        return btns.map((btn) => (
            <Box key={btn.id} display="flex" alignItems="center" marginBottom={2}>
                <TextField label={btn.text} fullWidth size="small" inputRef={(el) => (buttonRefs[btn.id] = el)} />
                <IconButton aria-label="edit" onClick={() => handleUpdateButton(btn.id)} sx={{ marginLeft: "5px" }}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => handleDeleteButton(btn.id)} color="error" aria-label="delete">
                    <DeleteRounded />
                </IconButton>
            </Box>
        ));
    };

    const btns = messageNode.data.buttons && renderButtons(messageNode.data.buttons);

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
                    />
                    <Button
                        variant="outlined"
                        sx={{ border: "1px dashed darkgrey" }}
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
