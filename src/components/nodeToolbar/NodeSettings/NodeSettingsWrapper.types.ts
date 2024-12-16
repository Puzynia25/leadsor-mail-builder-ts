import { CommonNodeData } from "../../nodes/Node.types";

export interface INodeSettingsWrapper {
    render: JSX.Element;
    applyChanges?: () => void;
}

export interface INodeSettingsWrapperProps {
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
