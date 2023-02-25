import fetcher from "$lib/fetcher";

const query = `query GetDiscussion($number: Int!) {
  repository(name: "github-cms", owner: "sharu725") {
    discussion(number: $number) {
      bodyHTML
      title
    }
  }
}`;

/** @type {import('./$types').PageServerLoad} */
export async function load({ params: { number }, fetch }) {
  const variables = {
    number: parseInt(number),
  };
  try {
    const {
      repository: { discussion },
    } = await fetcher(query, variables, fetch);

    return {
      discussion,
    };
  } catch (error) {
    console.log(error);
  }
}
