<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import type { ActionData, PageData } from './$types';

	export let data: PageData;
	export let form: ActionData;

	let quantity = 1;

	const user = data.user;
	const dish = data.dish;

	$: total = quantity * dish.price;
	$: if (form?.valid) {
		alert('Added to cart successfully!');
		goto('/menu');
	}
</script>

<svelte:head>
	<title>Add to cart</title>
</svelte:head>

<main>
	<div class="dish">
		<img class="image" src={dish.photoUrl} alt={dish.name} />
	</div>
	<form use:enhance method="post">
		<input type="text" hidden name="dishId" value={dish.id} />
		<input type="text" hidden name="customerId" value={user.id} />
		<h1>{dish.name}</h1>
		<h2 class="price">Price: ₱ {dish.price}</h2>
		<div class="input-field">
			<label for="quantity">Quantity:</label>
			<input
				id="quantity"
				name="quantity"
				type="number"
				min={1}
				bind:value={quantity}
				placeholder="Quantity"
			/>
		</div>
		<h3>Total: ₱ {total}</h3>
		<button class="secondary" type="submit"> Add to cart </button>
		<button class="outlined"> Order now </button>
	</form>
</main>

<style>
	main {
		max-width: var(--max-width);
		margin: auto;
		padding: 1rem;
		display: flex;
		gap: 3rem;
		justify-content: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.image {
		--size: min(400px, 80vw);
		width: var(--size);
		height: var(--size);
		border-radius: 1rem;
		object-fit: cover;
	}

	@media (max-width: 800px) {
		main {
			flex-direction: column;
		}
		.image {
			--size: 100%;
		}
	}
</style>
