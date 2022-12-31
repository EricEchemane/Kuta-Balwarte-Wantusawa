<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<svelte:head>
	<title>Login | Kuta Balwarte Wantusawa</title>
</svelte:head>

<form method="post" use:enhance>
	<div>
		<input type="text" name="email" placeholder="Your email" required />
		<input type="password" name="password" placeholder="Your password" minlength="7" required />
	</div>
	<button type="submit">login</button>
</form>
{#if form && !form.valid}
	<div class="error">{form.message}</div>
{/if}
