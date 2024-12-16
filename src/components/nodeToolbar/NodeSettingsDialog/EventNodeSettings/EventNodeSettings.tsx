import { useState } from "react";
import {
    Chip,
    FormControlLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import { INodeSettingsDialog, INodeSettingsDialogProps, TimeRange } from "../NodeSettingsDialog.types";
import { EventNodeData } from "../../../nodes/Node.types";
import { inputConfig } from "./inputConfig";

const EventNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const eventNodeData = data as EventNodeData;

    const [selectedEvent, setSelectedEvent] = useState<string>(eventNodeData.selectedEvent ?? "0");
    const [selectedEventLabel, setSelectedEventLabel] = useState<string>(
        eventNodeData.selectedEventLabel ?? inputConfig[eventNodeData.selectedEvent ?? "0"]?.label ?? ""
    );

    const initialInputValues = (eventId: string) => {
        const inputs = inputConfig[eventId]?.inputs ?? [];
        return inputs.reduce((acc, input) => {
            if (input.type === "multiple") {
                acc[input.id] = [];
            } else if (input.type === "select") {
                acc[input.id] = input.options[0]?.toLowerCase() || "";
            } else {
                acc[input.id] = "";
            }
            return acc;
        }, {} as { [key: string]: any });
    };

    const [inputValues, setInputValues] = useState<{ [key: string]: any }>(
        eventNodeData.inputValues ?? initialInputValues(selectedEvent)
    );

    const selectedInputs = inputConfig[selectedEvent]?.inputs ?? [];

    const onEventChange = (e: SelectChangeEvent<string>) => {
        const selectedId = e.target.value;
        const selectedLabel = inputConfig[selectedId]?.label || "";

        setSelectedEvent(selectedId);
        setSelectedEventLabel(selectedLabel);
        setInputValues(initialInputValues(selectedId));
    };

    const onInputChange = (id: string, value: any) => {
        setInputValues((prev) => ({ ...prev, [id]: value }));
        console.log(inputValues, "inputValues");
    };

    const applyChanges = () => {
        const newData: EventNodeData = {
            ...eventNodeData,
            selectedEvent,
            selectedEventLabel,
            inputValues,
        };

        console.log(newData, "applyChanges");
        onUpdateNodeContent(newData);
    };

    return {
        render: (
            <div className="node-settings__container">
                {/* First Select */}
                <div>
                    <p className="node-settings__item-title">Select Event:</p>
                    <div className="node-settings__select">
                        <Select value={selectedEvent} onChange={onEventChange} sx={{ width: "100%", bgcolor: "#ffff" }}>
                            {Object.entries(inputConfig).map(([id, config]) => (
                                <MenuItem key={id} value={id}>
                                    {config.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                </div>

                {/* Dynamic Inputs */}
                {selectedInputs.map((input) => {
                    if (input.type === "text") {
                        return (
                            <div key={input.id} className="event-node-settings__input">
                                <p className="node-settings__item-title">{input.label}:</p>
                                <div className="node-settings__select">
                                    <TextField
                                        placeholder={input.placeholder}
                                        value={inputValues[input.id] || input.options[0]?.toLowerCase() || ""}
                                        onChange={(e) => onInputChange(input.id, e.target.value)}
                                        fullWidth
                                        sx={{ marginBottom: "10px", bgcolor: "#fff" }}
                                    />
                                </div>
                            </div>
                        );
                    }
                    if (input.type === "select") {
                        return (
                            <div key={input.id} className="event-node-settings__input">
                                <p className="node-settings__item-title">{input.label}:</p>
                                <div className="node-settings__select">
                                    <Select
                                        value={inputValues[input.id] || input.options[0]?.toLowerCase() || []}
                                        onChange={(e) => onInputChange(input.id, e.target.value)}
                                        fullWidth
                                        sx={{ bgcolor: "#fff" }}>
                                        {input.options.map((option: string) => (
                                            <MenuItem key={option} value={option.toLowerCase()}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        );
                    }

                    if (input.type === "multiple") {
                        if (inputValues["0"] !== input.visible) return null;
                        return (
                            <div key={input.id} className="event-node-settings__input">
                                <p className="node-settings__item-title">{input.label}:</p>
                                <div className="node-settings__select">
                                    <Select
                                        multiple
                                        value={inputValues[input.id] || input.options[0]?.toLowerCase() || []}
                                        onChange={(e) => onInputChange(input.id, e.target.value)}
                                        renderValue={(selected: string) => (
                                            <div className="node-settings__custom-group">
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </div>
                                        )}
                                        fullWidth
                                        sx={{ bgcolor: "#fff" }}>
                                        {input.options.map((option: string) => (
                                            <MenuItem key={option} value={option.toLowerCase()}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </div>
                            </div>
                        );
                    }
                    if (input.type === "radio") {
                        return (
                            <div key={input.id} className="event-node-settings__input">
                                <p className="node-settings__item-title">{input.label}:</p>
                                <RadioGroup
                                    value={inputValues[input.id] || input.options[0]?.toLowerCase() || ""}
                                    onChange={(e) => onInputChange(input.id, e.target.value)}>
                                    {input.options.map((option) => (
                                        <FormControlLabel
                                            key={option}
                                            value={option}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ))}
                                </RadioGroup>
                            </div>
                        );
                    }
                    if (input.type === "custom") {
                        return (
                            <div key={input.id} className="event-node-settings__input">
                                <p className="node-settings__item-title">{input.label}:</p>
                                <div className="node-settings__custom-group">
                                    {input.options.map((subInput) => {
                                        if (subInput.type === "number") {
                                            return (
                                                <TextField
                                                    key={subInput.id}
                                                    type="number"
                                                    label={subInput.label}
                                                    value={inputValues[subInput.id] || "1"}
                                                    onChange={(e) => onInputChange(subInput.id, e.target.value)}
                                                    fullWidth
                                                    sx={{ marginBottom: "10px", bgcolor: "#fff" }}
                                                />
                                            );
                                        }
                                        if (subInput.type === "select") {
                                            return (
                                                <Select
                                                    key={subInput.id}
                                                    value={
                                                        inputValues[subInput.id] ||
                                                        subInput.options[0]?.toLowerCase() ||
                                                        ""
                                                    }
                                                    onChange={(e) => onInputChange(subInput.id, e.target.value)}
                                                    fullWidth
                                                    sx={{ marginBottom: "10px", bgcolor: "#fff" }}>
                                                    {subInput.options.map((option: TimeRange) => (
                                                        <MenuItem key={option} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        ),
        applyChanges,
    };
};

export default EventNodeSettings;
