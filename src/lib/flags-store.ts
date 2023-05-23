import { writable } from 'svelte/store';
import posthog from 'posthog-js';

export const flags = writable({});

posthog.onFeatureFlags((phFlags) => {
	const flagsObj = phFlags.reduce((result, item) => {
		result[item] = item;
		return result;
	}, {});
	flags.set(flagsObj);
});
