import { CommonNodeData } from "../nodes/Node.types";

export interface ISidebarItem {
    id: string;
    data: CommonNodeData;
    type: "immediately" | "scheduledTime" | "event" | "repeat" | "wait" | "condition" | "email" | "sms" | "messenger";
}

export interface ISidebar {
    triggers: ISidebarItem[];
    workflowControl: ISidebarItem[];
    actions: ISidebarItem[];
}
