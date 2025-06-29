<script lang="ts">
	import { socket } from '$lib/socket';
	import { onMount } from 'svelte';

	let connected = $state(false);

	onMount(() => {
		const handleConnect = () => (connected = true);
		const handleDisconnect = () => (connected = false);

		socket.on('connect', handleConnect);
		socket.on('disconnect', handleDisconnect);

		return () => {
			socket.off('connect', handleConnect);
			socket.off('disconnect', handleConnect);
		};
	});
</script>

{#if connected}
	<p>connected</p>
{:else}
	<p>disconnected</p>
{/if}
