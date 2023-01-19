<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let quantity = 1;

	const user = data.user;
	const dish = data.dish;

	$: total = quantity * dish.price;
</script>

<svelte:head>
	<title>Add to cart</title>
</svelte:head>

<main>
	<div class="dish">
		<img class="image" src={dish.photoUrl} alt={dish.name} />
	</div>
	<div class="input">
		<h1>{dish.name}</h1>
		<h2 class="price">Price: ₱ {dish.price}</h2>
		<div class="input-field">
			<label for="quantity">Quantity:</label>
			<input
				id="quantity"
				type="number"
				min="1"
				bind:value={quantity}
				placeholder="Quantity"
			/>
		</div>
		<h3>Total: ₱ {total}</h3>
		<button class="secondary"> Add to cart </button>
		<button class="outlined"> Order now </button>
	</div>
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

	.input {
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
