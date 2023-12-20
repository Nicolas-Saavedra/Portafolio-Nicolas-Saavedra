<script lang="ts">
	export let iconUrl: string;
	export let content: string;
	export let index: number;

	let widthClass = 'w-42';
	let color = index % 2 === 0 ? '700' : '800';

	if (content.length <= 6) {
		widthClass = 'w-32';
	} else if (content.length <= 8) {
		widthClass = 'w-36';
	}
</script>

<div
	class={`h-12 flex flex-row align-middle items-center justify-center px-4
  text-white rounded-2xl mr-4 lg:mr-6 mt-6 shadow-sm
  ${widthClass} bg-slate-${color}`}
>
	<img src={iconUrl} style="max-width: 28px;max-height: 28px;" class="mr-3" alt="Language" />
	<p>
		{content}
	</p>
</div>
