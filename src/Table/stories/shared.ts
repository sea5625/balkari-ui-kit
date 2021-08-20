export const defaultRows = defaultRowsFunc();
function defaultRowsFunc() {
    let arr: any = [];
    for (let i = 0; i < 200; i++) {
        arr.push({
            id: i,
            name: {
                text: `Load${i}`,
                className: "data-table-cell-link",
                callbackFunc: () => {
                    console.log("callbackFunc");
                }
            },
            protocol: { text: "HTTP" },
            price: { text: `${i + 1}000` },
            rule: { text: "Round" },
            attached_groups: { text: "Kevins" },
            status: {
                text: `${
                    i % 3 === 0
                        ? "Pending"
                        : i % 5 === 0 || i % 2 === 0
                        ? "Started"
                        : "Stopped"
                }`,
                className: `data-table-cell-background ${
                    i % 3 === 0
                        ? "amber"
                        : i % 5 === 0 || i % 2 === 0
                        ? "green"
                        : "red"
                }`
            }
        });
    }
    return arr;
}

export const headers = [
    {
        headerKey: "name",
        text: "Name"
    },

    {
        headerKey: "price",
        text: "Price"
    },
    {
        headerKey: "rule",
        text: "Rule"
    },
    {
        headerKey: "attached_groups",
        text: "Attached"
    },
    {
        headerKey: "protocol",
        text: "Protocol"
    },
    {
        headerKey: "status",
        text: "Status"
    }
];

export const sortHeaders = [
    {
        headerKey: "name",
        text: "Name",
        isSortable: true
    },

    {
        headerKey: "price",
        text: "Price",
        isSortable: true
    },
    {
        headerKey: "rule",
        text: "Rule",
        isSortable: true
    },
    {
        headerKey: "attached_groups",
        text: "Attached",
        isSortable: true
    },
    {
        headerKey: "protocol",
        text: "Protocol"
    },
    {
        headerKey: "status",
        text: "Status"
    }
];

export const limitOptions = [10, 25, 50, 100];
