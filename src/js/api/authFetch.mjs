import { load } from "../../storage/index.mjs";

export function headers() {
  const token = load("token");

  return {
    "content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function authfetch(url, option = ) {
  return fetch(url, {
    ...option,
    headers: headers(),
  });
}
