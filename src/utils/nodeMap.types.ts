import { ISettingsMenu, ISettingsMenuProps } from "../components/settings/SettingsMenu.types";

export interface INodeMap {
    [key: string]: (data: ISettingsMenuProps) => ISettingsMenu;
}
