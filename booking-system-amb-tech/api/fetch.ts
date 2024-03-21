const url = "https://restful-booker.herokuapp.com/";

export const fetchPublic = async (path: string, method: string, data?: any) => {
  if (method == "get") {
    const res = await fetch(url + path);
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error("Fetch Error");
    }
  } else {
    const res = await fetch(url + path, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (res.ok) {
      return result;
    } else {
      throw new Error(result.message);
    }
  }
};
