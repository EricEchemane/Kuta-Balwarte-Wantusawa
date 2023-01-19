<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Menu - Kuta Balwarte Wantusawa</title>
</svelte:head>

<section>
	<header>
		<h1>Enjoy our menu😊</h1>
		<div class="input-field">
			<input type="search" placeholder="Search dishes" />
		</div>
	</header>

	<div class="dishes">
		{#each data.dishes as dish}
			<div class="dish">
				<div class="plate">
					<img src={dish.photoUrl} alt={dish.name} />
				</div>
				<div class="details">
					<div>
						<h3>{dish.name}</h3>
						<div class="numbers">
							<div>{dish.ordered} ordered</div>
							<div>{dish.likes} likes</div>
						</div>
					</div>
					<div class="foot">
						<h4 class="price">₱ {dish.price}</h4>
						<div class="actions">
							<a href={`/add-to-cart/${dish.id}`} title="add to cart">
								<button class="outlined">
									<span class="material-symbols-outlined">
										add_shopping_cart
									</span>
								</button></a
							>
							<button class="outlined"> Order now </button>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.price {
		margin: 1rem 0;
	}
	.actions {
		display: flex;
		gap: 1rem;
	}
	section {
		margin: auto;
		padding: 1rem 2rem;
	}
	header {
		max-width: var(--max-width);
		margin: 0 auto 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-left: 1rem;
	}
	.dishes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(410px, 1fr));
		justify-content: center;
		gap: 2rem;
	}
	.dish {
		overflow: hidden;
		border-radius: 1rem;
		box-shadow: var(--shadow);
		display: grid;
		grid-template-columns: max-content 1fr;
		padding: 2rem;
		gap: 2rem;
	}

	.plate {
		--size: 12rem;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		box-shadow: var(--shadow);
		border: 1rem solid white;
		display: grid;
		place-items: center;
	}

	.plate img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 50%;
	}

	.details {
		padding-top: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	.details button {
		padding: 1rem;
	}

	.numbers {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	@media (max-width: 550px) {
		.dish {
			grid-template-columns: 1fr;
		}
		.plate {
			--size: 300px !important;
			margin: auto;
		}
		header {
			flex-direction: column;
			align-items: flex-start;
			padding-left: 0;
		}
		header * {
			width: 100%;
		}
		.foot {
			width: 100%;
			display: flex;
			gap: 1rem;
			align-items: center;
			justify-content: space-between;
		}
	}
</style>
