import { Button } from "@mui/material";
import { Handle, Position } from "@xyflow/react";

import "./ButtonNode.scss";
import { IBtn } from "./Node.types";

const ButtonNode = ({ btn }: { btn: IBtn }) => {
    return (
        <div className="btn__wrapper">
            <Button
                variant="text"
                sx={{
                    cursor: "move",
                    border: "1px solid lightgrey",
                    borderRadius: "15px",
                    padding: "5px 0",
                }}
                fullWidth>
                {btn.text}
            </Button>
            <Handle type="source" position={Position.Right} id={`${btn.id}-source`} className="handle" />
        </div>
    );
};

export default ButtonNode;
