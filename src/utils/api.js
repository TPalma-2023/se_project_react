import { baseUrl } from "./constants";

export const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else Promise.reject(`Error: ${res.status}`);
};

export function getInitalItems() {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then(checkServerResponse);
}

export function postItems(item) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkServerResponse);
}

export function deleteItems(_id) {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkServerResponse);
}
