import { INodeMap } from "./nodeMap.types";
import ConditionNodeSettings from "../components/nodeToolbar/NodeSettings/ConditionNodeSettings/ConditionNodeSettings";
import EmailNodeSettings from "../components/nodeToolbar/NodeSettings/EmailNodeSettings/EmailNodeSettings";
import ImmediatelyNodeSettings from "../components/nodeToolbar/NodeSettings/ImmediatelyNodeSettings/ImmediatelyNodeSettings";
import ScheduledTimeNodeSettings from "../components/nodeToolbar/NodeSettings/ScheduledTimeNodeSettings/ScheduledTimeNodeSettings";
import SmsNodeSettings from "../components/nodeToolbar/NodeSettings/SmsNodeSettings/SmsNodeSettings";
import WaitNodeSettings from "../components/nodeToolbar/NodeSettings/WaitNodeSettings/WaitNodeSettings";

export const nodeMap: INodeMap = {
    immediately: ImmediatelyNodeSettings,
    scheduledTime: ScheduledTimeNodeSettings,
    wait: WaitNodeSettings,
    condition: ConditionNodeSettings,
    email: EmailNodeSettings,
    sms: SmsNodeSettings,
};
