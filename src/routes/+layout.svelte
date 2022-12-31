<script lang="ts">
	//import type { LayoutServerData } from './$types';
	//export let data: LayoutServerData;

	const toggleNavOnMobile = () => {
		document.getElementById('nav')?.classList.toggle('open');
	};
</script>

<nav>
	<section class="brand">
		<img src="/favicon.png" alt="kuta balwarte logo" />
		<h2>Kuta Balwarte</h2>
	</section>
	<section class="navigation" id="nav">
		<a href="/"> <h4>Home</h4> </a>
		<a href="/menu"> <h4>Menu</h4> </a>
		<a href="/order"> <h4>Orders</h4> </a>
		<div class="inputs">
			<div class="input-field">
				<span class="material-symbols-outlined"> search </span>
				<input type="search" placeholder="Search your favorite dish" />
			</div>
			<button class="icon-btn">
				<span class="material-symbols-outlined"> shopping_basket </span>
				<sup class="badge">7</sup>
			</button>
		</div>
	</section>
	<button class="icon-btn" id="menu-open-btn" on:click={toggleNavOnMobile}>
		<span class="material-symbols-outlined"> menu_open </span>
	</button>
</nav>

<!--<slot />-->
<style>
	#menu-open-btn {
		display: none;
	}
	nav {
		--height: 120px;
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

	.inputs {
		display: flex;
		align-content: center;
		gap: 2rem;
	}

	/* ================================ */
	.navigation {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	@media (max-width: 940px) {
		#menu-open-btn {
			display: inline;
		}
		.navigation {
			display: flex;
			flex-direction: column;
			padding: 2rem;
			box-shadow: var(--shadow);
			background-color: var(--surface);
			position: fixed;
			z-index: 10;
			top: var(--height);
			left: 0;
			right: 0;
			align-items: flex-start;
			justify-content: stretch;
			transition: 200ms ease;
			translate: 100% 0;
			opacity: 0;
		}
		.inputs {
			justify-content: stretch;
			width: 100%;
			margin-bottom: 1rem;
		}
		.input-field,
		.input-field input {
			width: 100%;
		}
	}
</style>
