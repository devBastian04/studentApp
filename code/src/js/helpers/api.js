// const API_BASE_URL = "https://reqres.in";
// const API_KEY = "free_user_3G5YJBZe7sUzCnpYnJLtkNTMAVA";
// const method = "GET";
// const endpoint = "/api/users";
// const data = {};

// const users = await callAPI(API_BASE_URL, API_KEY, method, endpoint, data);

export async function callAPI(API_BASE_URL, API_KEY, method, endpoint, data) {
  if (!API_BASE_URL || !method || !endpoint) {
    return false;
  }

  method = method.toUpperCase();

  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (API_KEY) {
    options.headers["x-api-key"] = API_KEY;
    // Or use Authorization instead if your API expects it:
    // options.headers.Authorization = `Bearer ${API_KEY}`;
  }

  if (method !== "GET" && method !== "HEAD" && data != null) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return await response.json();
}
