import ImmediatelyNodeEditor from "../components/nodeEditor/ImmediatelyNodeEditor";
import WaitNodeEditor from "../components/nodeEditor/WaitNodeEditor";
import ConditionNodeEditor from "../components/nodeEditor/conditionNodeEditor/ConditionNodeEditor";
import { INodeMap } from "./nodeMap.types";

export const nodeMap: INodeMap = {
    Immediately: ImmediatelyNodeEditor,
    Wait: WaitNodeEditor,
    Condition: ConditionNodeEditor,
};
