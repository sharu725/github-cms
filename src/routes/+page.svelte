<script>
  export let data;

  $: ({ nodes } = data);
  $: console.log(nodes);
</script>

<h1>Github CMS blog</h1>

<ul>
  {#each nodes as { title, number }}
    <li>
      <a href="/article/{number}">{title}</a>
    </li>
  {/each}
</ul>
