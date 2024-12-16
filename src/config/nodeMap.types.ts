import {
    INodeSettingsWrapper,
    INodeSettingsWrapperProps,
} from "../components/nodeToolbar/NodeSettingsDialog/NodeSettingsDialog";

export interface INodeMap {
    [key: string]: ({ data, onUpdateNodeContent }: INodeSettingsWrapperProps) => INodeSettingsWrapper;
}
