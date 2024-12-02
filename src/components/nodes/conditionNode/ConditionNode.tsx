import { NodeProps } from "@xyflow/react";
import ConditionItem from "./ConditionItem";
import { ConditionNodeType, ICondition } from "../Node.types";
import NodeWrapper from "../NodeWrapper";
import ButtonNode from "../ButtonNode";
import { notBtn } from "../../../utils";

import "./ConditionNode.scss";

const ConditionNode = ({ id, data }: NodeProps<ConditionNodeType>) => {
    const renderConditions = (conditionList: ICondition[]) => {
        if (conditionList.length === 0) {
            return null;
        }

        return conditionList.map((el) => {
            if (el.criteria === "") {
                return null;
            }
            return <ConditionItem key={el.id} id={el.id} condition={el} />;
        });
    };

    const conditions = renderConditions(data.conditions ?? []);

    return (
        <NodeWrapper id={id} data={data} handle="left">
            <div className="condition-node__conditions">
                {conditions}
                <ButtonNode btn={notBtn} isHandle={true} />
            </div>
        </NodeWrapper>
    );
};

export default ConditionNode;
