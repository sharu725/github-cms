<script>
  export let data;

  $: ({ nodes } = data);
  $: console.log(nodes);
</script>

<h1>Github CMS blog</h1>

<ul>
  {#each nodes as { title, number, slug }}
    <li>
      <a href="/article/{slug}-{number}">{title}</a>
    </li>
  {/each}
</ul>
