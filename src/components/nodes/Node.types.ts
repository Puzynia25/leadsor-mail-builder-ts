import { Node } from "@xyflow/react";

// export interface INodeBaseContent {
//     label: string;
//     color: string;
// }

// export interface IMessageNodeContent extends INodeBaseContent {
//     text: string;
//     buttons?: IBtn[];
// }

// export interface IPauseNodeContent extends INodeBaseContent {
//     duration: number;
//     timeRange: string;
// }

export interface IBtn {
    id: string;
    text: string;
}

export interface ICondition {
    id: string;
    criteria: string;
    equals: string;
}

// export interface IFilterNodeContent extends INodeBaseContent {
//     text: string;
// }

export interface INodeRender {
    render: JSX.Element;
}

export type NodeData = { icon: string; label: string; color: string; onEdit?: () => void };
export type ImmediatelyNodeData = NodeData & { name: string };
export type ScheduledTimeNodeData = NodeData & { name: string };
export type WaitNodeData = NodeData & {
    type?: string;
    waitingType?: string;
    timePeriod?: number;
    calendar?: string;
    timeRange?: string;
};
export type ConditionNodeData = NodeData & {
    conditions?: ICondition[];
};
export type EmailNodeData = NodeData & {
    conditions?: ICondition[];
};
export type SmsNodeData = NodeData & {
    conditions?: ICondition[];
};

// type MessageNodeData = { content: IMessageNodeContent };
// type PauseNodeData = { content: IPauseNodeContent };
// type FilterNodeData = { content: IFilterNodeContent };

export type CommonNodeData =
    | ImmediatelyNodeData
    | ScheduledTimeNodeData
    | WaitNodeData
    | ConditionNodeData
    | EmailNodeData
    | SmsNodeData;
export type CustomNodeType =
    | StartNodeType
    | ImmediatelyNodeType
    | ScheduledTimeNodeType
    | WaitNodeType
    | ConditionNodeType
    | EmailNodeType
    | SmsNodeType;

export type StartNodeType = Node<NodeData, "start">;
export type ImmediatelyNodeType = Node<ImmediatelyNodeData, "immediately">;
export type ScheduledTimeNodeType = Node<ScheduledTimeNodeData, "scheduledTime">;
export type WaitNodeType = Node<WaitNodeData, "wait">;
export type ConditionNodeType = Node<ConditionNodeData, "condition">;
export type EmailNodeType = Node<EmailNodeData, "email">;
export type SmsNodeType = Node<SmsNodeData, "sms">;
