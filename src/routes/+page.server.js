import fetcher from "$lib/fetcher";
import slugify from "@sindresorhus/slugify";

const query = `{
  repository(name: "github-cms", owner: "sharu725") {
    discussions(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {
      nodes {
        title
        number
        bodyHTML
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
  const imageRegex = /<img.*?src=['"](.*?)['"]/;
  nodes.map((node) => {
    node.slug = slugify(node.title);
    const imageFound = imageRegex.exec(node.bodyHTML);
    if (imageFound) {
      node.image = imageFound[0].replace(/.*src="([^"]*)".*/, "$1");
    }
  });

  return {
    nodes,
  };
}
