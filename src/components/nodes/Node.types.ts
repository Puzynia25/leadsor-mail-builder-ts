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

export type NodeData = { label: string; color: string; onEdit?: () => void };
export type ImmediatelyNodeData = NodeData & { name: string; buttons?: IBtn[] };
export type WaitNodeData = NodeData & { wait: number; timeRange: string };
export type ConditionNodeData = NodeData & {
    conditions?: ICondition[];
};

// type MessageNodeData = { content: IMessageNodeContent };
// type PauseNodeData = { content: IPauseNodeContent };
// type FilterNodeData = { content: IFilterNodeContent };

export type CommonNodeData = ImmediatelyNodeData | WaitNodeData | ConditionNodeData;
export type CustomNodeType = StartNodeType | ImmediatelyNodeType | WaitNodeType | ConditionNodeType;

export type StartNodeType = Node<NodeData, "start">;
export type ImmediatelyNodeType = Node<ImmediatelyNodeData, "immediately">;
export type WaitNodeType = Node<WaitNodeData, "wait">;
export type ConditionNodeType = Node<ConditionNodeData, "condition">;
