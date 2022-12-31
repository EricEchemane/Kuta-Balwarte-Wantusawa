<svelte:head>
	<title>Kuta Balwarte Wantusawa</title>
	<meta name="description" content="Filipino Restaurant" />
</svelte:head>

<main>
	<section class="left">
		<h1>
			Fast <span class="primary">Delivery</span> <br /> & Easy
			<span class="primary">Pickup</span>.
		</h1>
		<p>
			Kuta Balwarte Wantusawa Restaurant. <br /> Masarap na pagkain na totoong hahanap-hanapin mo!
		</p>
		<button class="secondary"> Order Now </button>
		<div class="chef">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Chef_icon.svg/1500px-Chef_icon.svg.png"
				alt="chef"
			/>
			<p>When you are too busy to cook, <br /> we are just one click away.</p>
		</div>
	</section>
	<section class="right">
		<img src="/images/delivery rider 2.png" alt="delivery rider" />
	</section>
</main>

<style>
	main {
		max-width: var(--max-width);
		margin: auto;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		min-height: 100vh;
		gap: 2rem;
	}

	.left {
		display: flex;
		padding-top: 3rem;
		align-items: flex-start;
		flex-direction: column;
		gap: 2rem;
	}
	.left h1 {
		font-size: 4rem;
	}
	.chef {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding-top: 3rem;
	}
	.chef img {
		width: 2.5rem;
		filter: drop-shadow(var(--shadow));
	}
	.chef p {
		border-left: 5px solid var(--primary);
		padding-left: 1rem;
		opacity: 0.8;
	}

	/* ===================================== */
	.right {
		position: relative;
	}
	.right img {
		width: 40vmax;
	}

	/* ===================================== */
	@media (max-width: 940px) {
		main {
			flex-direction: column;
			align-items: center;
		}
		.left {
			align-items: center;
			text-align: center;
		}
	}
</style>
