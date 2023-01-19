<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let count = 0;

	const user = data.user;
	const dishId = data.dishId;
</script>

<svelte:head>
	<title>Add to cart</title>
</svelte:head>

<pre> {JSON.stringify({ dishId, user }, null, 4)} </pre>
