<script lang="ts">
	let { form } = $props();
</script>

<section class="grid size-full place-items-center">
	<form method="post" class="flex w-full max-w-md flex-col gap-4">
		{#if form?.error}
			<p class="text-center">{form.error}</p>
		{/if}
		<input
			type="text"
			name="username"
			placeholder="username"
			minlength="3"
			maxlength="32"
			autocomplete="off"
			required
			class="border border-zinc-700 bg-zinc-800 px-4 py-2 outline-none"
		/>
		<button type="submit" class="cursor-pointer border border-zinc-700 bg-zinc-800 py-2">
			login
		</button>
	</form>
</section>
