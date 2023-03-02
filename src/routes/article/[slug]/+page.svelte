<script>
  export let data;

  $: ({ discussion } = data);
</script>

<h1>{discussion.title}</h1>

<div>
  {@html discussion.bodyHTML}
</div>
