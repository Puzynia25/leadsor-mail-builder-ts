import { Button } from "@mui/material";
import { Handle, Position } from "@xyflow/react";
import { IBtn } from "./Node.types";

import "./ButtonNode.scss";

const ButtonNode = ({ btn, isHandle }: { btn: IBtn; isHandle: boolean }) => {
    return (
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
                fullWidth>
                {btn.text}
            </Button>

            {isHandle && <Handle type="source" position={Position.Right} id={`${btn.id}-source`} />}
        </div>
    );
};

export default ButtonNode;
