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
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(item),
  }).then(checkServerResponse);
}

export function deleteItems(_id) {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(checkServerResponse);
}

export const likeClothingItem = (_id) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(checkServerResponse);
};

export const dislikeClothingItem = (_id) => {
  const jwt = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  }).then(checkServerResponse);
};
