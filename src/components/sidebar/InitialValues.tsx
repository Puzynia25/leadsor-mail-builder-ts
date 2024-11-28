import {
    AccessTimeRounded,
    AlternateEmailRounded,
    LanRounded,
    PlayArrowRounded,
    SmsRounded,
} from "@mui/icons-material";
import { Sidebar } from "./SidebarItem.types";

export const sidebarItems: Sidebar = {
    triggers: [
        {
            id: "1",
            icon: <PlayArrowRounded fontSize="large" color="success" />,
            data: {
                label: "Immediately",
                color: "#2b7e2f",
                text: "type your message...",
            },
            type: "immediately",
        },
    ],

    workflowControl: [
        {
            id: "2",
            icon: <AccessTimeRounded fontSize="large" color="primary" />,
            data: { label: "Wait", color: "#6c95b2", wait: 3, timeRange: "hours" },
            type: "wait",
        },
        {
            id: "3",
            icon: <LanRounded fontSize="large" color="primary" />,
            data: { label: "Condition", color: "#6c95b2" },
            type: "condition",
        },
    ],

    actions: [
        {
            id: "4",
            icon: <AlternateEmailRounded fontSize="large" color="warning" />,
            data: { label: "Send email", color: "#fe9c0c" },
            type: "email",
        },
        {
            id: "5",
            icon: <SmsRounded fontSize="large" color="warning" />,
            data: { label: "Send sms", color: "#fe9c0c" },
            type: "sms",
        },
    ],
};
