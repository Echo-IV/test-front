import { JSON_PLACEHOLDER_API_URL } from "../config";

export const getUsers = async () => {
  const response = await fetch(`${JSON_PLACEHOLDER_API_URL}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};
