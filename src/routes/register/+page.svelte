<script lang="ts">
	import { enhance } from '$app/forms';
	import {
		initFirebase,
		loginWithGoogle,
		logoutFirebaseApp,
		onUserAuthStateChanged
	} from '$lib/firebase';
	import type { User as FirebaseUser } from 'firebase/auth';
	import { onMount } from 'svelte';
	import type { ActionData } from './$types';

	let app = initFirebase();
	let user: FirebaseUser | null = null;
	let password = '';
	let confimPassword = '';
	export let form: ActionData;

	onMount(async () => {
		onUserAuthStateChanged(app, (_user) => (user = _user));
	});

	const logout = () => {
		logoutFirebaseApp(app);
	};
</script>

<svelte:head>
	<title>Register | Kuta Balwarte Wantusawa</title>
</svelte:head>

{#if user}
	<form method="post" use:enhance>
		<input
			type="text"
			readonly
			hidden
			name="photoURL"
			value={user.photoURL}
			required
		/>
		<div>
			<img src={user.photoURL} alt={user.displayName} width="50" />
		</div>
		<div>
			<input
				readonly
				required
				value={user.email}
				type="text"
				name="email"
				placeholder="Your email"
			/>
		</div>
		<div>
			<input
				readonly
				required
				value={user.displayName}
				type="text"
				name="displayName"
				placeholder="Your name"
				minlength="3"
			/>
		</div>
		<div>
			<input
				required
				bind:value={password}
				type="password"
				name="hash"
				placeholder="Password"
				minlength="7"
			/>
		</div>
		<div>
			<input
				required
				bind:value={confimPassword}
				type="password"
				placeholder="Confirm password"
				minlength="7"
			/>
		</div>
		<button
			type="submit"
			disabled={password !== confimPassword || password === ''}
			>Submit</button
		>
		<button on:click={logout}>cancel</button>
		<a href="/login">Login instead</a>
	</form>
	{#if form && !form.valid}
		<div class="error">{form.message}</div>
	{/if}
{:else}
	<button on:click={() => loginWithGoogle(app)}>
		Continue with Google
	</button>
{/if}
