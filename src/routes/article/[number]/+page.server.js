import { GITHUB_TOKEN } from "$env/static/private";

const query = `query GetDiscussion($number: Int!) {
  repository(name: "github-cms", owner: "sharu725") {
    discussion(number: $number) {
      bodyHTML
      title
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
    body: JSON.stringify({ query, variables: { number: 1 } }),
  });
  const {
    data: {
      repository: { discussion },
    },
  } = await res.json();
  return {
    discussion,
  };
}
