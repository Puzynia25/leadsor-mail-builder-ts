import {
    INodeSettingsDialog,
    INodeSettingsDialogProps,
} from "../components/nodeToolbar/NodeSettingsDialog/NodeSettingsDialog.types";
import { nodeMap } from "../config/nodeMap";

export const useNodeSettings = ({ type, data, onUpdateNodeContent }: INodeSettingsDialogProps): INodeSettingsDialog => {
    const nodeComponent = nodeMap[type];
    return nodeComponent({ data, onUpdateNodeContent });
};
