import { CommonNodeData } from "../nodes/Node.types";

export interface SidebarItem {
    id: string;
    icon: JSX.Element;
    data: CommonNodeData;
    type: "message" | "pause" | "filter";
}
