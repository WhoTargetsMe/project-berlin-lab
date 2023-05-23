import { writable } from 'svelte/store';
import posthog from 'posthog-js';

export const flags = writable({});

posthog.onFeatureFlags((phFlags) => {
	const flagsObj = phFlags.reduce((result, item) => {
		const enabled = !posthog.getFeatureFlagPayload(item) ? false : true;
		const payload = enabled && posthog.getFeatureFlagPayload(item);

		return {
			...result,
			[item]: {
				enabled,
				payload
			}
		};
	}, {});
	console.log(flagsObj);
	// flags.set(flagsObj);
});


let flagsObj = {};
let postHogFlags = posthog.feature_flags.getFlags();

for (let flagz of postHogFlags) {
	console.log(flagz);
	flagsObj[flagz] = !posthog.getFeatureFlag(flagz)
		? { enabled: false }
		: { enabled: true, payload: posthog.getFeatureFlagPayload(flagz) };
}

console.log(flagsObj);

