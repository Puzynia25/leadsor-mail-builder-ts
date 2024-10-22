import { useState } from "react";
import { MenuItem, Select, TextField } from "@mui/material";
import { ISettingsMenu, ISettingsMenuProps } from "./SettingsMenu.types";
import { FilterNodeData, FilterNodeType } from "../nodes/Node.types";

import "./FilterSettings.scss";

const FilterSettings = ({ node, onUpdateNodeContent }: ISettingsMenuProps): ISettingsMenu => {
    const filterNode = node as FilterNodeType;

    const [criteria, setCriteria] = useState("");
    const [text, setText] = useState("");

    const createNewNode = (newData: FilterNodeData): FilterNodeType => {
        const newNode: FilterNodeType = {
            ...filterNode,
            data: newData,
        };

        return newNode;
    };

    const handleUpdateCriteria = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newData: FilterNodeData = {
            ...filterNode.data,
            criteria: e.target.value,
        };

        setCriteria(e.target.value);
        onUpdateNodeContent(filterNode.id, createNewNode(newData));
    };

    const handleUpdateText = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newData: FilterNodeData = {
            ...filterNode.data,
            text: e.target.value,
        };

        setText(e.target.value);
        onUpdateNodeContent(filterNode.id, createNewNode(newData));
    };

    // const renderFilters = (filters) => {
    //     if (!filters || filters.length === 0) {
    //         return null;
    //     }

    //     return filters.map((filter) => (
    //         <Box key={filter.id} display="flex" alignItems="center" marginBottom={2}>
    //             <TextField label={filter.text} fullWidth size="small" inputRef={(el) => (filterRefs[filter.id] = el)} />
    //             {/* <IconButton aria-label="edit" onClick={() => handleUpdateButton(btn.id)} sx={{ marginLeft: "5px" }}>
    //                 <Edit />
    //             </IconButton>
    //             <IconButton onClick={() => handleDeleteButton(btn.id)} color="error" aria-label="delete">
    //                 <DeleteRounded />
    //             </IconButton> */}
    //         </Box>
    //     ));
    // };

    // const filters = filterNode.data.filters && renderFilters(filterNode.data.filters);

    return {
        render: (
            <div>
                <div className="filter-settings__content">
                    <Select
                        displayEmpty
                        value={criteria}
                        onChange={handleUpdateCriteria}
                        sx={{ bgcolor: "#ffff", flex: 1 }}>
                        <MenuItem value="">Select criteria...</MenuItem>
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="assignee">Assignee</MenuItem>
                    </Select>
                    <TextField
                        value={text}
                        size="medium"
                        onChange={handleUpdateText}
                        sx={{ width: "80px", bgcolor: "#ffff", flex: 1 }}
                    />
                </div>

                {/* Current filters */}
                {/* <div className="btns__wrapper">{filters}</div> */}
            </div>
        ),
    };
};

export default FilterSettings;
