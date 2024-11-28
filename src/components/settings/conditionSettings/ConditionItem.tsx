import { FormControl, IconButton, MenuItem, Select } from "@mui/material";
import { ICondition } from "../../nodes/Node.types";
import { _currency } from "../../../constants";
import { useEffect, useState } from "react";
import { DeleteRounded } from "@mui/icons-material";

import "./ConditionItem.scss";

const ConditionItem = ({
    condition,
    conditions,
    onDelete,
    onUpdate,
}: {
    condition: ICondition;
    conditions: ICondition[];
    onDelete: () => void;
    onUpdate: (updatedCondition: Partial<ICondition>) => void;
}) => {
    const [criteria, setCriteria] = useState(condition.criteria || "");
    const [equals, setEquals] = useState(condition.equals || "");

    useEffect(() => {
        onUpdate({ criteria, equals });
    }, [criteria, equals]);

    return (
        <div className="condition-item__content">
            <div className="condition-item__selects">
                <FormControl fullWidth size="small">
                    <Select
                        id="select-criteria"
                        value={criteria}
                        onChange={(e) => setCriteria(e.target.value as string)}
                        inputProps={{ "aria-label": "Without label" }}
                        displayEmpty
                        sx={{ bgcolor: "#ffff" }}
                        className="form-control">
                        <MenuItem value="">Select criteria...</MenuItem>
                        <MenuItem value="cashAmount">cash amount</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                    <Select
                        id="select-cash-amount"
                        value={equals}
                        onChange={(e) => setEquals(e.target.value as string)}
                        inputProps={{ "aria-label": "Without label" }}
                        displayEmpty
                        sx={{ bgcolor: "#ffff" }}
                        className="form-control">
                        <MenuItem value="">equals</MenuItem>
                        <MenuItem value=">20000€">
                            {">"} 20000 {_currency}
                        </MenuItem>
                        <MenuItem value="<20000€">
                            {"<"} 20000 {_currency}
                        </MenuItem>
                    </Select>
                </FormControl>
                <IconButton color="error" aria-label="delete" disabled={conditions.length <= 1} onClick={onDelete}>
                    <DeleteRounded />
                </IconButton>

                {/* <Select displayEmpty value={cashAmount} onChange={handleUpdateCashAmount} sx={{ bgcolor: "#ffff" }}>
                    <MenuItem value="">equals</MenuItem>
                    <MenuItem value="highCashAmount">
                        {">"} 20000 {_currency}
                    </MenuItem>
                    <MenuItem value="lowCashAmount">
                        {"<"} 20000 {_currency}
                    </MenuItem>
                </Select>
                <IconButton color="error" aria-label="delete">
                    <DeleteRounded />
                </IconButton> */}
            </div>
        </div>
    );
};

export default ConditionItem;
