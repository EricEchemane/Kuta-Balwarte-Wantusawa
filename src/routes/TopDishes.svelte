<script lang="ts">
	import type { Dish } from '@prisma/client';

	export let dishes: Dish[];
</script>

<section>
	<h1>Top Dishes</h1>

	<div class="dishes">
		{#each dishes as dish}
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
					<button class="outlined"> Order now </button>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	section {
		max-width: var(--max-width);
		margin: auto;
		padding: 3rem 1rem;
	}
	h1 {
		font-size: 2rem;
		margin: 2rem 0;
	}
	.dishes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
		align-self: flex-end;
	}

	.numbers {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}
</style>
