import { load } from "../storage/index.mjs"

export function headers() {
    const token = load("token");

return {
    "content-Type": "application/json",
    "Authorization": `Bear ${token}`
}
}

export async function authfetch(url, option) {
return fetch (url, {
    ...option,
    headers: headers()
})
}