const url = "https://restful-booker.herokuapp.com/";

export const fetchPublic = async (path: string, method: string, data?: any) => {
  try {
    if (method == "get") {
      const res = await fetch(url + path);
      if (res.ok) {
        const data = await res.json();
        return data;
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
        console.log(result);
        return result;
      }
    }
  } catch (error) {
    console.error(error);
    throw new Error(error)
  }
};
