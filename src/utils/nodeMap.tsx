import { ISettingsMenu, ISettingsMenuProps } from "../components/settings/SettingsMenu.types";
import MessageSettings from "../components/settings/MessageSettings";
import PauseSettings from "../components/settings/PauseSettings";
import FilterSettings from "../components/settings/FilterSettings";

export interface INodeMap {
    [key: string]: (data: ISettingsMenuProps) => ISettingsMenu;
}
export const nodeMap: INodeMap = {
    Message: MessageSettings,
    Pause: PauseSettings,
    Filter: FilterSettings,
};
