<script lang="ts">
	import '../../lib/bg-tiled.scss';
	import {
		Timeline,
		TimelineConnector,
		TimelineContent,
		TimelineDot,
		TimelineItem,
		TimelineOppositeContent,
		TimelineSeparator
	} from 'svelte-vertical-timeline';
	import jsonPosts from '../../lib/posts.json';
	import { onMount } from 'svelte';

	let innerWidth = 9999;

	type Post = {
		title: string;
		time?: string;
		content: string;
		imageUrl: string;
	};

	const posts: Post[] = jsonPosts;
	let calculatedImageHeights: number[] = [];

	onMount(() => {
		posts
			.map((post) => {
				return document.getElementById(post.title)! as HTMLImageElement;
			})
			.forEach((image) => {
				calculatedImageHeights = [...calculatedImageHeights, image.height + 100];
			});
		calculatedImageHeights[calculatedImageHeights.length - 1] -= 100;
	});
</script>

<div class="flex flex-col justify-center align-middle items-center py-36 md:px-28 xl:px-64">
	<div id="title-container flex flex-col">
		<h1 class="text-center sm:text-left text-5xl lg:text-6xl font-lato tracking-wider">
			Proyectos Realizados
		</h1>
		<span class="hidden sm:block h-[5px] w-[2.25rem] bg-slate-800"></span>
	</div>
	{#if innerWidth > 640}
		<div id="timeline-wrapper" class="mt-24">
			<Timeline position="alternate">
				{#each posts as post, i}
					<TimelineItem>
						<TimelineOppositeContent slot="opposite-content">
							<h2 class="text-3xl lg:text-4xl xl:text-5xl font-lato tracking-wider">
								{post.title}
							</h2>
							<p class="mt-8 text-md lg:text-xl">{@html post.content}</p>
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot
								style="background-color: #475569;border: 3px #475569;width: 0.75rem; height: 0.75rem;"
							/>
							<TimelineConnector
								style={calculatedImageHeights[i]
									? 'min-height:' + calculatedImageHeights[i].toString() + 'px'
									: ''}
							/>
						</TimelineSeparator>
						<TimelineContent>
							<div id={post.title + i.toString()}>
								<img
									id={post.title}
									src={post.imageUrl}
									alt={post.title + ' Image'}
									style="max-height: 500px;"
								/>
							</div>
						</TimelineContent>
					</TimelineItem>
				{/each}
			</Timeline>
		</div>
	{:else}
		<div class="mt-24 mx-8">
			{#each posts as post, i}
				<div class="mb-16" id={post.title + i.toString()}>
					<img
						id={post.title}
						src={post.imageUrl}
						alt={post.title + ' Image'}
						style="max-height: 500px;"
					/>
					<h2 class="mt-8 text-3xl lg:text-4xl xl:text-5xl font-lato tracking-wider">
						{post.title}
					</h2>
					<p class="mt-8 text-md lg:text-xl">{@html post.content}</p>
				</div>
			{/each}
		</div>
	{/if}
</div>

<svelte:window bind:innerWidth />
