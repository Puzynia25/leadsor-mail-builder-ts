export const inputConfig = {
    "0": { label: "New contact created", inputs: [] },
    "1": {
        label: "Contact added to contact list",
        inputs: [
            {
                type: "select",
                label: "Contact list group",
                id: "0",
                options: ["subscribed", "unsubscribed", "hard bounce", "soft bounce", "removed"],
            },
        ],
    },
    "2": {
        label: "Existing contact updated",
        inputs: [
            {
                type: "select",
                label: "Modification",
                id: "0",
                options: ["any", "specific"],
            },
            {
                type: "multiple",
                label: "Сhoose criteria (multiple)",
                id: "1",
                options: [
                    "type",
                    "status",
                    "created",
                    "product",
                    "cascade",
                    "origin",
                    "affiliate",
                    "campaignid",
                    "marital status",
                    "requested amount",
                    "city",
                    "device brand",
                    "car",
                    "income type",
                    "monthly income",
                    "insolvency",
                    "distraint",
                ],
                visible: "specific",
            },
        ],
    },
    "3": {
        label: "Sent email",
        inputs: [
            {
                type: "select",
                label: "Node",
                id: "0",
                options: ["email-node1/template", "email-node2/template"],
            },
        ],
    },
    "4": {
        label: "Sent SMS",
        inputs: [
            {
                type: "select",
                label: "Node",
                id: "0",
                options: ["sms-node1/template", "sms-node2/template"],
            },
        ],
    },
    "5": {
        label: "Page visit",
        inputs: [
            {
                type: "text",
                label: "Page visit",
                id: "0",
                options: [],
            },
            {
                type: "select",
                label: "Operator",
                id: "1",
                options: ["equals", "start with"],
            },
        ],
    },
    "6": {
        label: "Link click",
        inputs: [
            {
                type: "select",
                label: "Select email/sms node",
                id: "0",
                options: ["email-node1", "email-node2", "sms-node1", "sms-node2"],
            },
        ],
    },
    "7": { label: "New Lead created", inputs: [] },
    "8": { label: "New Prelead created", inputs: [] },
    "9": {
        label: "Lead status",
        inputs: [
            {
                type: "select",
                label: "Status",
                id: "0",
                options: ["sold", "not sold", "created"],
            },
            {
                type: "custom",
                label: "Time out",
                id: "1",
                options: [
                    {
                        type: "number",
                        label: "",
                        id: "timeoutValue",
                    },
                    {
                        type: "select",
                        label: "",
                        id: "timeoutUnit",
                        options: ["second", "minute", "hour", "day", "week", "month", "year"],
                    },
                ],
            },
        ],
    },
    "10": {
        label: "Prelead status",
        inputs: [
            {
                type: "select",
                label: "Status",
                id: "0",
                options: ["sold", "not sold", "bad", "processing", "ok"],
            },
            {
                type: "custom",
                label: "Time out",
                id: "1",
                options: [
                    {
                        type: "number",
                        label: "",
                        id: "timeoutValue",
                        options: [],
                    },
                    {
                        type: "select",
                        label: "",
                        id: "timeoutUnit",
                        options: ["second", "minute", "hour", "day", "week", "month", "year"],
                    },
                ],
            },
        ],
    },
    "11": {
        label: "Sales status",
        inputs: [
            {
                type: "select",
                label: "Offer name",
                id: "0",
                options: ["HomeCredit", "offer2", "offer3"],
            },
            {
                type: "radio",
                label: "Match/non-match condition",
                id: "1",
                options: ["valid", "invalid"],
            },
            {
                type: "multiple",
                label: "AND (OR)",
                id: "2",
                options: ["confirmed", "unconfirmed"],
            },
            {
                type: "custom",
                label: "Time out",
                id: "2",
                options: [
                    {
                        type: "number",
                        label: "",
                        id: "timeoutValue",
                        options: [],
                    },
                    {
                        type: "select",
                        label: "",
                        id: "timeoutUnit",
                        options: ["second", "minute", "hour", "day", "week", "month", "year"],
                    },
                ],
            },
        ],
    },
};
