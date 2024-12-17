import { NodeTypes } from "@xyflow/react";
import StartNode from "../components/nodes/StartNode";
import ImmediatelyNode from "../components/nodes/ImmediatelyNode/ImmediatelyNode";
import WaitNode from "../components/nodes/WaitNode/WaitNode";
import ConditionNode from "../components/nodes/ConditionNode/ConditionNode";
import EmailNode from "../components/nodes/EmailNode/EmailNode";
import SmsNode from "../components/nodes/SmsNode/SmsNode";
import ScheduledTimeNode from "../components/nodes/ScheduledTimeNode/ScheduledTimeNode";
import EventNode from "../components/nodes/EventNode/EventNode";
import RepeatNode from "../components/nodes/RepeatNode/RepeatNode";

export const nodeTypes: NodeTypes = {
    start: StartNode,
    immediately: ImmediatelyNode,
    scheduledTime: ScheduledTimeNode,
    repeat: RepeatNode,
    event: EventNode,
    wait: WaitNode,
    condition: ConditionNode,
    email: EmailNode,
    sms: SmsNode,
};
