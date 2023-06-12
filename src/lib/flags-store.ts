import { writable } from 'svelte/store';
import posthog from 'posthog-js';
export const ssr = false;
export const flags = writable({});

posthog.onFeatureFlags(() => {
	const posthogFlags: [] = posthog.feature_flags.getFlags();
	const flagsWithPayload: { [key: string]: { enabled: boolean; payload: any } } =
		posthogFlags.reduce((result, item) => {
			return {
				...result,
				[item]: {
					enabled: posthog.getFeatureFlag(item),
					payload: posthog.getFeatureFlagPayload(item)
				}
			};
		}, {});

	flags.set(flagsWithPayload);
});
