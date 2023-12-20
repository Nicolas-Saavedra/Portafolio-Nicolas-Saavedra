declare module 'svelte-vertical-timeline' {
	import { SvelteComponentTyped } from 'svelte';

	type PositionType = 'right' | 'left' | 'alternate';

	// Define Props Interfaces
	interface TimelineProps {
		position: PositionType;
		style?: string;
	}

	interface TimelineItemProps {
		position?: 'right' | 'left';
		style?: string;
	}

	interface TimelineSeparatorProps {
		style?: string;
	}

	interface TimelineDotProps {
		style?: string;
	}

	interface TimelineConnectorProps {
		style?: string;
	}

	interface TimelineContentProps {
		style?: string;
	}

	interface TimelineOppositeContentProps {
		style?: string;
	}

	// Declare Components
	export class Timeline extends SvelteComponentTyped<TimelineProps> {}
	export class TimelineItem extends SvelteComponentTyped<TimelineItemProps> {}
	export class TimelineSeparator extends SvelteComponentTyped<TimelineSeparatorProps> {}
	export class TimelineDot extends SvelteComponentTyped<TimelineDotProps> {}
	export class TimelineConnector extends SvelteComponentTyped<TimelineConnectorProps> {}
	export class TimelineContent extends SvelteComponentTyped<TimelineContentProps> {}
	export class TimelineOppositeContent extends SvelteComponentTyped<TimelineOppositeContentProps> {}
}
