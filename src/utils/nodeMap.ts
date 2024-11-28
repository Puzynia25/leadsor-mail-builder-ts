import ImmediatelySettings from "../components/settings/ImmediatelySettings";
import WaitSettings from "../components/settings/WaitSettings";
import ConditionSettings from "../components/settings/conditionSettings/ConditionSettings";
import { INodeMap } from "./nodeMap.types";

export const nodeMap: INodeMap = {
    Immediately: ImmediatelySettings,
    Wait: WaitSettings,
    Condition: ConditionSettings,
};
