import { ImmediatelyNodeType } from "../Node.types";
import { NodeProps } from "@xyflow/react";
import NodeWrapper from "../NodeWrapper";
import { Chip } from "@mui/material";

import "./ImmediatelyNode.scss";

const ImmediatelyNode = ({ id, data }: NodeProps<ImmediatelyNodeType>) => {
    return (
        <NodeWrapper id={id} data={data} handle="right">
            {data.name && (
                <>
                    <span className="immediately-node__title">Name: </span>
                    <Chip label={data.name} />
                </>
            )}
        </NodeWrapper>
    );
};

export default ImmediatelyNode;
