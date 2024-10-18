export interface INodeBaseContent {
    color: string;
    render: JSX.Element;
}

export interface IPauseNodeContent extends INodeBaseContent {
    duration: number;
    timeRange: string;
}

export interface IMessageNodeContent extends INodeBaseContent {
    text: string;
}

export interface IFilterNodeContent extends INodeBaseContent {
    text: string;
}
