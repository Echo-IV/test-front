import { JSON_PLACEHOLDER_API_URL } from "../config";

export const getPhotos = async () => {
  const response = await fetch(`${JSON_PLACEHOLDER_API_URL}/photos`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

export const getPhoto = async (id) => {
  const response = await fetch(`${JSON_PLACEHOLDER_API_URL}/photos/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
