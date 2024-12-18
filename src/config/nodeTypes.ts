import { NodeTypes } from "@xyflow/react";
import StartNode from "../components/nodes/StartNode";
import ImmediatelyNode from "../components/nodes/ImmediatelyNode/ImmediatelyNode";
import ScheduledTimeNode from "../components/nodes/ScheduledTimeNode/ScheduledTimeNode";
import EventNode from "../components/nodes/EventNode/EventNode";
import RepeatNode from "../components/nodes/RepeatNode/RepeatNode";
import WaitNode from "../components/nodes/WaitNode/WaitNode";
import ConditionNode from "../components/nodes/ConditionNode/ConditionNode";
import ContactStorageNode from "../components/nodes/ContactStorageNode/ContactStorageNode";
import EmailNode from "../components/nodes/EmailNode/EmailNode";
import SmsNode from "../components/nodes/SmsNode/SmsNode";
import MessengerNode from "../components/nodes/MessengerNode/MessengerNode";

export const nodeTypes: NodeTypes = {
    start: StartNode,
    immediately: ImmediatelyNode,
    scheduledTime: ScheduledTimeNode,
    repeat: RepeatNode,
    event: EventNode,
    wait: WaitNode,
    condition: ConditionNode,
    contactStorage: ContactStorageNode,
    email: EmailNode,
    sms: SmsNode,
    messenger: MessengerNode,
};
