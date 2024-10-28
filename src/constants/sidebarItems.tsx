import { AccessTimeRounded, LanRounded, MessageRounded } from "@mui/icons-material";
import { SidebarItem } from "../components/sidebar/SidebarItem.types";

export const sidebarItems: SidebarItem[] = [
    {
        id: "1",
        icon: <MessageRounded fontSize="large" color="success" />,
        data: {
            label: "Message",
            color: "#2b7e2f",
            text: "type your message...",
        },
        type: "message",
    },
    {
        id: "2",
        icon: <AccessTimeRounded fontSize="large" color="primary" />,
        data: { label: "Pause", color: "#6c95b2", pause: 3, timeRange: "hours" },
        type: "pause",
    },
    {
        id: "3",
        icon: <LanRounded fontSize="large" color="warning" />,
        data: { label: "Filter", color: "#fe9c0c" },
        type: "filter",
    },
];
