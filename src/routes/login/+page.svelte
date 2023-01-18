<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import {
		initFirebase,
		loginWithGoogle,
		onUserAuthStateChanged
	} from '$lib/firebase';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let app = initFirebase();

	export let form: ActionData;

	onMount(() => {
		onUserAuthStateChanged(app, async (user) => {
			if (!user?.email) return;
			const formdata = new FormData();
			formdata.append('email', user.email);
			const res = await fetch('/api/google-login', {
				method: 'post',
				body: formdata
			});
			if (res.status === 404) goto('/register');
			else window.location.reload();
		});
	});
</script>

<svelte:head>
	<title>Login | Kuta Balwarte Wantusawa</title>
</svelte:head>

<form method="post" use:enhance>
	<button class="outlined" on:click={() => loginWithGoogle(app)}>
		Log in with Google
	</button>
	<p>or</p>
	<div class="input-field">
		<input type="text" name="email" placeholder="Your email" required />
	</div>
	<div class="input-field">
		<input
			type="password"
			name="password"
			placeholder="Your password"
			minlength="7"
			required
		/>
	</div>
	<button class="secondary" type="submit">login</button>
	<a href="/register">Don't have an account? Create now</a>
</form>
{#if form && !form.valid}
	<div class="error">{form.message}</div>
{/if}

<style>
	form {
		max-width: 500px;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}
	.input-field {
		padding-left: 0;
	}
	a,
	p {
		text-align: center;
	}
	.outlined {
		border: 1px solid #777;
	}
</style>
