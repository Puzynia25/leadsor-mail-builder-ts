import { INodeMap } from "./nodeMap.types";
import ConditionNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ConditionNodeSettings/ConditionNodeSettings";
import EmailNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/EmailNodeSettings/EmailNodeSettings";
import ImmediatelyNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ImmediatelyNodeSettings/ImmediatelyNodeSettings";
import ScheduledTimeNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/ScheduledTimeNodeSettings/ScheduledTimeNodeSettings";
import SmsNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/SmsNodeSettings/SmsNodeSettings";
import WaitNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/WaitNodeSettings/WaitNodeSettings";
import EventNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/EventNodeSettings/EventNodeSettings";
import RepeatNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/RepeatNodeSettings/RepeatNodeSettings";
import MessengerNodeSettings from "../components/nodeToolbar/NodeSettingsDialog/MessengerNodeSettings/MessengerNodeSettings";

export const nodeMap: INodeMap = {
    immediately: ImmediatelyNodeSettings,
    scheduledTime: ScheduledTimeNodeSettings,
    repeat: RepeatNodeSettings,
    event: EventNodeSettings,
    wait: WaitNodeSettings,
    condition: ConditionNodeSettings,
    email: EmailNodeSettings,
    sms: SmsNodeSettings,
    messenger: MessengerNodeSettings,
};
