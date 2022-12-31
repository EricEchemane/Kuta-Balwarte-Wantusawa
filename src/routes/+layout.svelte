<script lang="ts">
	//import type { LayoutServerData } from './$types';
	//export let data: LayoutServerData;
</script>

<nav>
	<section class="brand">
		<img src="/favicon.png" alt="kuta balwarte logo" />
		<h2>Kuta Balwarte</h2>
	</section>
	<section class="navigation">
		<a href="/"> <h4>Home</h4> </a>
		<a href="/menu"> <h4>Menu</h4> </a>
		<a href="/order"> <h4>Orders</h4> </a>
		<div class="input-field">
			<span class="material-symbols-outlined"> search </span>
			<input type="search" placeholder="Search your favorite dish" />
		</div>
		<button class="icon-btn">
			<span class="material-symbols-outlined"> shopping_basket </span>
			<sup class="badge">7</sup>
		</button>
	</section>
</nav>

<!--<slot />-->
<style>
	nav {
		max-width: 1080px;
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2rem 1rem;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}
	.brand img {
		width: 3rem;
	}

	/* ================================ */
	.navigation {
		display: flex;
		align-items: center;
		gap: 2rem;
	}
</style>
