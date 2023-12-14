export function pause(delay = 200) {
    return new Promise((res) => setTimeout(res, delay));
}
