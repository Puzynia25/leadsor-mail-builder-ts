import { ISettingsMenu, ISettingsMenuProps } from "../components/settings/SettingsMenu.types";
import { nodeMap } from "../utils/nodeMap";

export const useSettingsMenu = (label: string, data: ISettingsMenuProps): ISettingsMenu => {
    const nodeComponent = nodeMap[label];
    return nodeComponent(data);
};
