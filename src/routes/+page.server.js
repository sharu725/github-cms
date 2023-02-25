import fetcher from "$lib/fetcher";

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
export async function load({ fetch }) {
  const res = await fetcher(query, {}, fetch);
  const {
    repository: {
      discussions: { nodes },
    },
  } = res;

  return {
    nodes,
  };
}
