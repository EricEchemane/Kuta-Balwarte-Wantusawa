<script lang="ts">
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>Kuta Balwarte Wantusawa</title>
	<meta name="description" content="Filipino Restaurant" />
</svelte:head>

{#if data && data.user}
	<h1>Hello {data.user.displayName}</h1>
	<form method="post" action="?/logout">
		<button type="submit">logout</button>
	</form>
{:else}
	<a href="/login">Login</a>
{/if}
