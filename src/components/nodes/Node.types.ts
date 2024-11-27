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

export interface IFilter {
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

export type NodeData = { label: string; color: string };
export type MessageNodeData = NodeData & { text: string; buttons?: IBtn[] };
export type PauseNodeData = NodeData & { pause: number; timeRange: string };
export type FilterNodeData = NodeData & {
    conditions?: IFilter[];
};

// type MessageNodeData = { content: IMessageNodeContent };
// type PauseNodeData = { content: IPauseNodeContent };
// type FilterNodeData = { content: IFilterNodeContent };

export type CommonNodeData = MessageNodeData | PauseNodeData | FilterNodeData;
export type CustomNodeType = StartNodeType | MessageNodeType | PauseNodeType | FilterNodeType;

export type StartNodeType = Node<NodeData, "start">;
export type MessageNodeType = Node<MessageNodeData, "message">;
export type PauseNodeType = Node<PauseNodeData, "pause">;
export type FilterNodeType = Node<FilterNodeData, "filter">;
