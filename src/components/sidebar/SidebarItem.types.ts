import { CommonNodeData } from "../nodes/Node.types";

export interface ISidebarItem {
    id: string;
    data: CommonNodeData;
    type: "immediately" | "scheduledTime" | "wait" | "condition" | "email" | "sms";
}

export interface ISidebar {
    triggers: ISidebarItem[];
    workflowControl: ISidebarItem[];
    actions: ISidebarItem[];
}
