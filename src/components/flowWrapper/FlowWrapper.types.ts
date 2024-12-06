import { NodeTypes } from "@xyflow/react";
import StartNode from "../nodes/StartNode";
import ImmediatelyNode from "../nodes/ImmediatelyNode/ImmediatelyNode";
import WaitNode from "../nodes/WaitNode/WaitNode";
import ConditionNode from "../nodes/ConditionNode/ConditionNode";
import EmailNode from "../nodes/EmailNode/EmailNode";
import SmsNode from "../nodes/SmsNode/SmsNode";
import ScheduledTimeNode from "../nodes/ScheduledTimeNode/ScheduledTimeNode";

export const nodeTypes: NodeTypes = {
    start: StartNode,
    immediately: ImmediatelyNode,
    scheduledTime: ScheduledTimeNode,
    wait: WaitNode,
    condition: ConditionNode,
    email: EmailNode,
    sms: SmsNode,
};
