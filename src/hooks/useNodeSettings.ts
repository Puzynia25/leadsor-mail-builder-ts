import {
    INodeSettingsWrapper,
    INodeSettingsWrapperProps,
} from "../components/nodeToolbar/NodeSettings/NodeSettingsWrapper.types";
import { nodeMap } from "../utils/nodeMap";

export const useNodeSettings = ({
    type,
    data,
    onUpdateNodeContent,
}: INodeSettingsWrapperProps): INodeSettingsWrapper => {
    const nodeComponent = nodeMap[type];
    return nodeComponent({ data, onUpdateNodeContent });
};
