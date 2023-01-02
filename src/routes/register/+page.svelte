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

		<div class="input-field">
			<input
				required
				value={user.email}
				type="text"
				name="email"
				placeholder="Your email"
			/>
		</div>

		<div class="input-field">
			<input
				required
				readonly
				value={user.displayName}
				type="text"
				name="displayName"
				placeholder="Your name"
				minlength="3"
			/>
		</div>

		<div class="input-field">
			<input
				required
				type="text"
				name="address"
				placeholder="Complete address"
				minlength="3"
			/>
		</div>

		<div class="input-field">
			<input
				required
				type="text"
				name="phone"
				placeholder="Phone number"
				minlength="3"
			/>
		</div>

		<div class="input-field">
			<input
				required
				bind:value={password}
				type="password"
				name="hash"
				placeholder="Password"
				minlength="7"
			/>
		</div>

		<div class="input-field">
			<input
				required
				bind:value={confimPassword}
				type="password"
				placeholder="Confirm password"
				minlength="7"
			/>
		</div>

		<div class="actions">
			<button
				type="submit"
				class="secondary"
				disabled={password !== confimPassword || password === ''}
				>Submit</button
			>
			<button class="outlined" on:click={logout}>Cancel</button>
		</div>

		<a href="/login" class="login"
			>Already have an account? Login instead</a
		>
	</form>
	{#if form && !form.valid}
		<div class="error">{form.message}</div>
	{/if}
{:else}
	<button on:click={() => loginWithGoogle(app)}>
		Continue with Google
	</button>
{/if}

<style>
	a.login {
		font-size: 0.9rem;
	}
	form {
		max-width: 500px;
		border-radius: 1rem;
		padding: 2rem;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}
	.actions {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin: 1rem 0;
		width: 100% !important;
	}

	.input-field input {
		padding-left: 0;
	}
	.input-field {
		box-shadow: none;
		width: 100%;
	}
	.input-field:focus-within,
	button:focus-visible {
		box-shadow: 0 0 0 1px #999;
	}
	button {
		padding: 0.7rem 1rem;
	}
	button:disabled {
		opacity: 0.5;
		pointer-events: none;
	}
	img {
		width: 5rem;
		height: 5rem;
		object-fit: cover;
		border-radius: 50%;
	}
</style>
