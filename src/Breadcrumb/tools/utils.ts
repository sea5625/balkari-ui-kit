export const htmlEntityDec = (str: string) => {
    return str
        .replace(/&amp;/gi, "&")
        .replace(/&#35;/gi, "#")
        .replace(/&lt;/gi, "<")
        .replace(/&gt;/gi, ">")
        .replace(/&quot;/gi, "'")
        .replace(/&#39;/gi, "\\")
        .replace(/&#37;/gi, "%")
        .replace(/&#40;/gi, "(")
        .replace(/&#41;/gi, ")")
        .replace(/&#43;/gi, "+")
        .replace(/&#47;/gi, "/")
        .replace(/&#46;/gi, ".")
        .replace(/&#59;/g, ";");
};
