import { CustomNodeType } from "../nodes/Node.types";

export interface ISettingsMenu {
    render: JSX.Element;
}

type events = () => void;

// export interface ISettingsMenuProps {
//     node: Node<CommonNodeData>;
//     onClose?: events;
//     onUpdateNodeText: (nodeId: string) => void;
//     onAddButtonToNode: (nodeId: string, text: string) => void;
//     onUpdateButton: (nodeId: string, btnId: string, newText: string) => void;
//     onDeleteButton: events;
//     onUpdateNodePause: (nodeId: string, newText: string) => void;
// }

export interface ISettingsMenuProps {
    node: CustomNodeType;
    onClose?: events;
    onUpdateNodeContent: (nodeId: string, newNode: CustomNodeType) => void;
}

// export enum TimeRange {
//     seconds,
//     minutes,
//     hours,
// }
