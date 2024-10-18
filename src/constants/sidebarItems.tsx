import { AccessTimeRounded, MessageRounded, TuneRounded } from "@mui/icons-material";

export interface SidebarItem {
    id: string;
    label: string;
    icon: JSX.Element;
}

export const sidebarItems: SidebarItem[] = [
    { id: "1", label: "Message", icon: <MessageRounded fontSize="large" color="success" /> },
    { id: "2", label: "Pause", icon: <AccessTimeRounded fontSize="large" color="primary" /> },
    { id: "3", label: "Filter", icon: <TuneRounded fontSize="large" color="warning" /> },
];
