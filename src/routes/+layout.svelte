<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="h-dvh w-full">
	{@render children()}
</main>
