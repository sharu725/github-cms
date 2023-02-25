import { GITHUB_TOKEN } from "$env/static/private";

const fetcher = async (query, variables, fetch) => {
  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    });
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default fetcher;
