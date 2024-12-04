import { NodeTypes } from "@xyflow/react";
import StartNode from "../nodes/StartNode";
import ImmediatelyNode from "../nodes/ImmediatelyNode";
import WaitNode from "../nodes/WaitNode";
import ConditionNode from "../nodes/conditionNode/ConditionNode";
import EmailNode from "../nodes/emailNode";
import SmsNode from "../nodes/SmsNode";
import ScheduledTimeNode from "../nodes/ScheduledTimeNode";

export const nodeTypes: NodeTypes = {
    start: StartNode,
    immediately: ImmediatelyNode,
    scheduledTime: ScheduledTimeNode,
    wait: WaitNode,
    condition: ConditionNode,
    email: EmailNode,
    sms: SmsNode,
};
