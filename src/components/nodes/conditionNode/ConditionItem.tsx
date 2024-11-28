import { Button, Chip } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { ICondition } from "../Node.types";

import "./ConditionItem.scss";

const ConditionItem = ({ id, condition }: { id: string; condition: ICondition }) => {
    return (
        <div className="condition__wrapper">
            <div className="btn__wrapper">
                <Button
                    variant="text"
                    sx={{
                        cursor: "move",
                        justifyContent: "flex-start",
                        border: "1px solid lightgrey",
                        borderRadius: "15px",
                        padding: "10px 5px",
                        color: "grey",
                        background: "#ffff",
                        overflow: "auto",
                    }}
                    fullWidth
                    key={condition.id}>
                    <div className="condition-node__badge-wrapper">
                        <Chip label={condition.criteria} size="small" />
                        <Chip label={condition.equals} size="small" />
                    </div>
                </Button>
                <Handle
                    type="source"
                    position={Position.Right}
                    id={`${id}-source`}
                    style={{ backgroundColor: "green" }}
                />
            </div>
        </div>
    );
};

export default ConditionItem;
