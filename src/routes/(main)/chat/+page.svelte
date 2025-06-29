<script lang="ts">
	import { goto } from '$app/navigation';

	let { data } = $props();

	const { username } = data;

	let roomId = $state('');

	const createRoom = () => {
		const uuid = crypto.randomUUID();
		goto(`/chat/${uuid}`);
	};
</script>

<section class="grid size-full place-items-center">
	<div class="flex w-full max-w-md flex-col gap-4">
		<p class="text-center">you are <strong class="font-semibold">{username}</strong></p>
		<input
			type="text"
			placeholder="room-id"
			bind:value={roomId}
			class="border border-zinc-700 bg-zinc-800 px-4 py-2 outline-none"
		/>
		<a href="/chat/{roomId.trim()}" class="border border-zinc-700 bg-zinc-800 py-2 text-center">
			join room
		</a>
		<button onclick={createRoom} class="cursor-pointer border border-zinc-700 bg-zinc-800 py-2">
			create a room
		</button>
		<a href="/api/logout" class="border border-rose-800 bg-rose-900 py-2 text-center">log out</a>
	</div>
</section>
