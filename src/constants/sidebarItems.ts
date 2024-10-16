export interface sidebarItem {
    id: string;
    data: {
        label: string;
        text: string;
        pause?: string;
    };
}

export const sidebarItems: sidebarItem[] = [
    {
        id: "1",
        data: {
            label: "Message",
            text: "Didn't quite understand your answer or question, so I suggest you start the transfer process over again",
        },
    },
    { id: "2", data: { label: "Pause", pause: "3", text: "minutes" } },
    { id: "3", data: { label: "Filter", text: "" } },
];
