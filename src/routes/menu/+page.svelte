<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section>
	<header>
		<h1>Our dishes😊</h1>
		<div class="input-field">
			<input type="search" placeholder="Search food" />
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
					<div class="actions">
						<h4>₱ {dish.price}</h4>
						<button class="outlined"> Order now </button>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.actions {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	section {
		margin: auto;
		padding: 1rem 2rem;
	}
	header {
		max-width: var(--max-width);
		margin: 0 auto 2rem;
		padding-left: 1rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.dishes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
</style>
