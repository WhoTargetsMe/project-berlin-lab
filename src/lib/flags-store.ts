import { writable } from 'svelte/store';
import posthog from 'posthog-js';
export const flags = writable({});

const posthogFlags: [string] = posthog.feature_flags.getFlags();
const flagsWithPayload: { [key: string]: { enabled: boolean; payload: any } } = posthogFlags.reduce(
	(result, item) => {
		return {
			...result,
			[item]: {
				enabled: posthog.getFeatureFlag(item),
				payload: posthog.getFeatureFlagPayload(item)
			}
		};
	},
	{}
);
flags.set(flagsWithPayload);
