import { MessengerNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./MessengerNode.scss";

const MessengerNode = ({ id, data }: NodeProps<MessengerNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="all">
            {data.sender && data.message && (
                <>
                    <div>
                        <span className="node__title">Sender: </span>
                        <Chip label={data.sender} sx={{ margin: "5px" }} />
                    </div>
                    <div>
                        <span className="node__title">Message: </span>
                        <Chip label={data.message} />
                    </div>
                </>
            )}
        </NodeWrapper>
    );
};

export default MessengerNode;