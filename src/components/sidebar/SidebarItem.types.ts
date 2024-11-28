import { CommonNodeData } from "../nodes/Node.types";

export interface SidebarItem {
    id: string;
    icon: JSX.Element;
    data: CommonNodeData;
    type: "immediately" | "wait" | "condition" | "email" | "sms";
}

export interface Sidebar {
    triggers: SidebarItem[];
    workflowControl: SidebarItem[];
    actions: SidebarItem[];
}
