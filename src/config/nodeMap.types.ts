import {
    INodeSettingsWrapper,
    INodeSettingsWrapperProps,
} from "../components/nodeToolbar/NodeSettings/NodeSettingsWrapper.types";

export interface INodeMap {
    [key: string]: ({ data, onUpdateNodeContent }: INodeSettingsWrapperProps) => INodeSettingsWrapper;
}
