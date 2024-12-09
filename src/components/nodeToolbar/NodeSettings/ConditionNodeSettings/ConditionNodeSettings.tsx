import { useState } from "react";
import { INodeSettingsWrapper, INodeSettingsWrapperProps } from "../NodeSettingsWrapper.types";
import { ConditionNodeData, ICondition } from "../../../nodes/Node.types";
import { _currency } from "../../../../constants";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import ConditionItem from "./ConditionItem";
import ButtonNode from "../../../nodes/ButtonNode";
import { notBtn } from "../../../../utils";

import "./ConditionNodeSettings.scss";

const ConditionNodeSettings = ({ data, onUpdateNodeContent }: INodeSettingsWrapperProps): INodeSettingsWrapper => {
    const conditionNodeData = data as ConditionNodeData;

    const [conditions, setConditions] = useState<ICondition[]>(conditionNodeData.conditions ?? []);

    const onAddNewCondition = () => {
        const newCondition = { id: uuidv4(), criteria: "", equals: "" };
        setConditions((prevConditions) => [...prevConditions, newCondition]);
    };

    const onDeleteCondition = (id: string) => {
        setConditions((prev) => prev.filter((el) => el.id !== id));
    };

    const updateCondition = (id: string, updatedCondition: Partial<ICondition>) => {
        const updatedConditions = (prevConditions: ICondition[]) => {
            return prevConditions.map((condition) =>
                condition.id === id ? { ...condition, ...updatedCondition } : condition
            );
        };

        setConditions((prevConditions) => updatedConditions(prevConditions));
    };

    const applyChanges = () => {
        const updatedData: ConditionNodeData = {
            ...conditionNodeData,
            conditions: conditions,
        };
        onUpdateNodeContent(updatedData);
    };

    //current conditions
    const renderCurrentConditions = (conditions: ICondition[]) => {
        if (conditions.length === 0) {
            return null;
        }

        // return conditions.map((btn) => (
        //     <Box key={btn.id} display="flex" alignItems="center" marginBottom={2}>
        //         <TextField label={btn.text} fullWidth size="small" inputRef={(el) => (buttonRefs[btn.id] = el)} />
        //         <IconButton aria-label="edit" onClick={() => handleUpdateButton(btn.id)} sx={{ marginLeft: "5px" }}>
        //             <Edit />
        //         </IconButton>
        //         <IconButton onClick={() => handleDeleteButton(btn.id)} color="error" aria-label="delete">
        //             <DeleteRounded />
        //         </IconButton>
        //     </Box>
        // ));
    };

    //new conditions
    const renderConditions = (conditions: ICondition[]) => {
        if (conditions.length === 0) {
            onAddNewCondition();
        }

        return conditions.map((condition) => {
            return (
                <div key={condition.id}>
                    <ConditionItem
                        conditions={conditions}
                        condition={condition}
                        onDelete={() => onDeleteCondition(condition.id)}
                        onUpdate={(updatedConditionData) => updateCondition(condition.id, updatedConditionData)}
                    />
                    <div className="if-not-divider">
                        <p>If not:</p>
                        <div className="divider"></div>
                    </div>
                </div>
            );
        });
    };

    const allConditions = renderConditions(conditions);
    // const currentConditions = filterNode.data.conditions && renderConditions(filterNode.data.conditions);

    return {
        render: (
            <div className="condition-node-settings__content">
                {/* Add condition */}
                {allConditions}
                <ButtonNode btn={notBtn} isHandle={false} />
                <Button
                    variant="outlined"
                    sx={{ border: "1px dashed darkgrey", color: "ButtonText", marginY: 3 }}
                    fullWidth
                    onClick={onAddNewCondition}>
                    + Add new condition
                </Button>
            </div>
        ),
        applyChanges,
    };
};

export default ConditionNodeSettings;
