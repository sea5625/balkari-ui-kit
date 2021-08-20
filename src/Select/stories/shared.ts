export const defaultOptions = defaultOptionsFunc();

function defaultOptionsFunc() {
    let arr: string[] = [];
    for (let i = 1; i < 6; i++) {
        arr.push(`Options ${i}`);
    }
    return arr;
}
