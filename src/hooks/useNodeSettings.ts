import {
    INodeSettingsWrapper,
    INodeSettingsWrapperProps,
} from "../components/nodeToolbar/NodeSettingsDialog/NodeSettingsDialog";
import { nodeMap } from "../config/nodeMap";

export const useNodeSettings = ({
    type,
    data,
    onUpdateNodeContent,
}: INodeSettingsWrapperProps): INodeSettingsWrapper => {
    const nodeComponent = nodeMap[type];
    return nodeComponent({ data, onUpdateNodeContent });
};
