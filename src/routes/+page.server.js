import { GITHUB_TOKEN } from "$env/static/private";

const query = `{
  repository(name: "github-cms", owner: "sharu725") {
    discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        title
        number
      }
    }
  }
}`;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });
  const {
    data: {
      repository: {
        discussions: { nodes },
      },
    },
  } = await res.json();

  return {
    nodes,
  };
}
