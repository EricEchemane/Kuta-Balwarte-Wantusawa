<script lang="ts">
	//import type { LayoutServerData } from './$types';
	//export let data: LayoutServerData;
	//export let href;
	//$: console.log({ href });
</script>

<!--<nav>
	<section class="right-section">
		<img src="/favicon.png" alt="kuta balwarte logo" />
		<div>
			<p>Kuta Balwarte</p>
			<div class="wantusawa">wantusawa</div>
		</div>
	</section>
	<section class="search-input">
		<i class="bx bx-search" />
		<input type="search" placeholder="Search for your favorite dish" />
	</section>

	{#if data && data.user}
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/orders">Orders</a></li>
			<li><a href="/me">My account</a></li>
			<li><a href="/cart"><i class="bx bx-cart" /></a></li>
		</ul>
	{:else}
		<ul>
			<li><a href="/login">Login</a></li>
		</ul>
	{/if}
</nav>-->

<slot />
