import { CommonNodeData } from "../nodes/Node.types";

export interface INodeEditor {
    render: JSX.Element;
    applyChanges?: () => void;
}

export interface INodeEditorProps {
    type: string;
    data: CommonNodeData;
    onClose?: () => void;
    onUpdateNodeContent: (newNodeData: CommonNodeData) => void;
    onApplyChanges?: () => void;
}

export enum TimeRange {
    minute = "minute",
    hour = "hour",
    day = "day",
    week = "week",
    month = "month",
    year = "year",
}
