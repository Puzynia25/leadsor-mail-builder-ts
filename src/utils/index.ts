import { NodeTypes } from "@xyflow/react";
import MessageNode from "../components/nodes/MessageNode";
import PauseNode from "../components/nodes/PauseNode";
import FilterNode from "../components/nodes/FilterNode";
import MessageSettings from "../components/settings/MessageSettings";
import PauseSettings from "../components/settings/PauseSettings";
import FilterSettings from "../components/settings/FilterSettings";
import { ISettingsMenu, ISettingsMenuProps } from "../components/settings/SettingsMenu.types";

export const calculateNodePosition = (
    e: React.DragEvent,
    getViewport: () => { x: number; y: number; zoom: number },
    position: DOMRect
): { x: number; y: number } => {
    const { x: scaleX, y: scaleY, zoom } = getViewport();

    const canvasPosition = {
        x: (e.clientX - position.left - scaleX) / zoom,
        y: (e.clientY - position.top - scaleY) / zoom,
    };
    return canvasPosition;
};

export const nodeTypes: NodeTypes = {
    message: MessageNode,
    pause: PauseNode,
    filter: FilterNode,
};

export interface INodeMap {
    [key: string]: (data: ISettingsMenuProps) => ISettingsMenu;
}

export const nodeMap: INodeMap = {
    Message: MessageSettings,
    Pause: PauseSettings,
    Filter: FilterSettings,
};
