<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let count = 0;

	const user = data.user;
	const dish = data.dish;
</script>

<svelte:head>
	<title>Add to cart</title>
</svelte:head>

<pre> {JSON.stringify({ dish, user }, null, 4)} </pre>
