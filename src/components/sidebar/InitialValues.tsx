import { ISidebar } from "./SidebarItem.types";

export const sidebarItems: ISidebar = {
    triggers: [
        {
            id: "1",
            data: {
                icon: "PlayArrowRounded",
                label: "Immediately",
                color: "#2b7e2f",
            },
            type: "immediately",
        },
        {
            id: "2",
            data: {
                icon: "CalendarMonthRounded",
                label: "Scheduled Time",
                color: "#2b7e2f",
            },
            type: "scheduledTime",
        },
        {
            id: "3",
            data: {
                icon: "NotificationsNoneRounded",
                label: "In the event",
                color: "#2b7e2f",
            },
            type: "event",
        },
        {
            id: "4",
            data: {
                icon: "LoopRounded",
                label: "Repeat",
                color: "#2b7e2f",
            },
            type: "repeat",
        },
    ],

    workflowControl: [
        {
            id: "2",
            data: {
                icon: "AccessTimeRounded",
                label: "Wait",
                color: "#6c95b2",
            },
            type: "wait",
        },
        {
            id: "3",
            data: { icon: "LanRounded", label: "Condition", color: "#6c95b2" },
            type: "condition",
        },
    ],

    actions: [
        {
            id: "4",
            data: {
                icon: "AlternateEmailRounded",
                label: "Send email",
                color: "#fe9c0c",
            },
            type: "email",
        },
        {
            id: "5",
            data: { icon: "SmsRounded", label: "Send sms", color: "#fe9c0c" },
            type: "sms",
        },
    ],
};
