export const sortByHeaderKey = (arr, headerKey, sortDirection) => {
    console.log("headerKey", headerKey, arr);
    if (sortDirection === "NONE") {
        return arr;
    } else if (sortDirection === "DESC") {
        return []
            .concat(arr)
            .sort((a: { [key: string]: any }, b: { [key: string]: any }) => {
                if (!Number(a[headerKey].text)) {
                    return a[headerKey].text < b[headerKey].text ? -1 : 0;
                } else {
                    return Number(a[headerKey].text) < Number(b[headerKey].text)
                        ? -1
                        : 0;
                }
            });
    } else {
        return []
            .concat(arr)
            .sort((a: { [key: string]: any }, b: { [key: string]: any }) => {
                console.log(Boolean(NaN));

                if (!Number(a[headerKey].text)) {
                    return a[headerKey].text > b[headerKey].text ? -1 : 0;
                } else {
                    return Number(a[headerKey].text) > Number(b[headerKey].text)
                        ? -1
                        : 0;
                }
            });
    }
};
