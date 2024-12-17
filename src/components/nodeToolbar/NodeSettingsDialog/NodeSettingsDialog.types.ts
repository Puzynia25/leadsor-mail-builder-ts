import { CommonNodeData } from "../../nodes/Node.types";

export interface INodeSettingsDialog {
    render: JSX.Element;
    advanced?: JSX.Element;
    applyChanges: () => void;
}

export interface INodeSettingsDialogProps {
    type: string;
    data: CommonNodeData;
    onClose?: () => void;
    onUpdateNodeContent: (newNodeData: CommonNodeData) => void;
    onApplyChanges?: () => void;
}

export enum TimeRange {
    second = "second",
    minute = "minute",
    hour = "hour",
    day = "day",
    week = "week",
    month = "month",
    year = "year",
}
