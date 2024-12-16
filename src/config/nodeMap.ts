import { INodeMap } from "./nodeMap.types";
import ConditionNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ConditionNodeSettings/ConditionNodeSettings";
import EmailNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/EmailNodeSettings/EmailNodeSettings";
import ImmediatelyNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ImmediatelyNodeSettings/ImmediatelyNodeSettings";
import ScheduledTimeNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ScheduledTimeNodeSettings/ScheduledTimeNodeSettings";
import SmsNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/SmsNodeSettings/SmsNodeSettings";
import WaitNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/WaitNodeSettings/WaitNodeSettings";
import EventNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/EventNodeSettings/EventNodeSettings";

export const nodeMap: INodeMap = {
    immediately: ImmediatelyNodeSettings,
    scheduledTime: ScheduledTimeNodeSettings,
    event: EventNodeSettings,
    wait: WaitNodeSettings,
    condition: ConditionNodeSettings,
    email: EmailNodeSettings,
    sms: SmsNodeSettings,
};
