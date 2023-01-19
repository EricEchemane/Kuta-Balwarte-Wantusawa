<script lang="ts">
	import type { Order } from '@prisma/client';
	import type { PageData } from './$types';

	export let data: PageData;
	const orders: Order[] = data.user.Orders;
</script>

<svelte:head>
	<title>Your orders</title>
</svelte:head>

{#if orders.length === 0}
	<div class="empty">
		<h1>You have no orders yet</h1>
		<a href="/menu"> <button class="secondary"> Order Now </button></a>
	</div>
{/if}

<style>
	.empty {
		display: grid;
		place-items: center;
		gap: 1rem;
	}
</style>
