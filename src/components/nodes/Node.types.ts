import { Node } from "@xyflow/react";
import { TimeRange } from "../nodeToolbar/NodeSettingsDialog/NodeSettingsDialog.types";

export interface IBtn {
    id: string;
    text: string;
}

export interface ICondition {
    id: string;
    criteria: string;
    equals: string;
}

export interface INodeRender {
    render: JSX.Element;
}

export type NodeData = { icon: string; label: string; color: string; onEdit?: () => void; onOpenContacts?: () => void };
export type ImmediatelyNodeData = NodeData & { name: string };
export type ScheduledTimeNodeData = NodeData & { date?: string; time?: string };
export type RepeatNodeData = ScheduledTimeNodeData & { repeatValue?: number; repeatUnit?: TimeRange };
export type EventNodeData = NodeData & { selectedEvent?: string; selectedEventLabel?: string; inputValues?: {} };
export type WaitNodeData = NodeData & {
    type?: string;
    waitingType?: string;
    timePeriod?: number;
    calendar?: string;
    timeRange?: TimeRange;
};
export type ConditionNodeData = NodeData & {
    conditions?: ICondition[];
};
export type EmailNodeData = NodeData & {
    email?: string;
};
export type SmsNodeData = NodeData & {
    sender?: string;
    message?: string;
};
export type MessengerNodeData = NodeData & {
    sender?: string;
    message?: string;
};

export type CommonNodeData =
    | ImmediatelyNodeData
    | ScheduledTimeNodeData
    | EventNodeData
    | WaitNodeData
    | ConditionNodeData
    | EmailNodeData
    | SmsNodeData
    | MessengerNodeData;
export type CustomNodeType =
    | StartNodeType
    | ImmediatelyNodeType
    | ScheduledTimeNodeType
    | RepeatNodeType
    | EventNodeType
    | WaitNodeType
    | ConditionNodeType
    | EmailNodeType
    | SmsNodeType
    | MessengerNodeType;

export type StartNodeType = Node<NodeData, "start">;
export type ImmediatelyNodeType = Node<ImmediatelyNodeData, "immediately">;
export type ScheduledTimeNodeType = Node<ScheduledTimeNodeData, "scheduledTime">;
export type RepeatNodeType = Node<RepeatNodeData, "repeat">;
export type EventNodeType = Node<EventNodeData, "event">;
export type WaitNodeType = Node<WaitNodeData, "wait">;
export type ConditionNodeType = Node<ConditionNodeData, "condition">;
export type EmailNodeType = Node<EmailNodeData, "email">;
export type SmsNodeType = Node<SmsNodeData, "sms">;
export type MessengerNodeType = Node<MessengerNodeData, "messenger">;
