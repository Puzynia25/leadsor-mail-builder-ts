import { NodeProps } from "@xyflow/react";
import { FilterNodeType, IFilter } from "./Node.types";
import NodeWrapper from "./NodeWrapper";
import ButtonNode from "./ButtonNode";
import { notBtn } from "../../utils";
import ConditionNode from "./ConditionNode";

import "./FilterNode.scss";

const FilterNode = ({ id, data }: NodeProps<FilterNodeType>) => {
    const renderConditions = (conditionList: IFilter[]) => {
        if (conditionList.length === 0) {
            return null;
        }

        return conditionList.map((el) => {
            if (el.criteria === "") {
                return null;
            }
            return <ConditionNode key={el.id} id={el.id} condition={el} />;
        });
    };

    const conditions = renderConditions(data.conditions ?? []);

    return (
        <NodeWrapper id={id} data={data} handle="left">
            <div className="filter-node__conditions">
                {conditions}
                <ButtonNode btn={notBtn} isHandle={true} />
            </div>
        </NodeWrapper>
    );
};

export default FilterNode;
