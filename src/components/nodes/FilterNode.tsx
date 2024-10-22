import { NodeProps } from "@xyflow/react";
import { FilterNodeType } from "./Node.types";
import NodeWrapper from "./NodeWrapper";

import "./FilterNode.scss";

const FilterNode = ({ id, data }: NodeProps<FilterNodeType>) => {
    return (
        <NodeWrapper id={id} data={data}>
            <div className="message-content__wrapper">
                <p className="message-content__text">{data.text}</p>
                {/* {filters && <div className="message-content__btns">{filters}</div>} */}
            </div>
        </NodeWrapper>
    );
};

export default FilterNode;
