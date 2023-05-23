import type { LayoutLoad } from './$types';
import { browser } from '$app/environment';
import { loadLocaleAsync } from '$lib/i18n/i18n-util.async';
import { PUBLIC_POSTHOG_KEY, PUBLIC_POSTHOG_API_HOST } from '$env/static/public';
import { setLocale } from '$lib/i18n/i18n-svelte';
import posthog from 'posthog-js';

export const load = (async (event) => {
	const locale = 'en';
	await loadLocaleAsync(locale);
	setLocale(locale);

	if (browser) {
		posthog.init(PUBLIC_POSTHOG_KEY, { api_host: PUBLIC_POSTHOG_API_HOST });
	}

	/**
	 * Posthog user identification:
	 * - Retrieve the participant details from local storage.
	 * - Use their Prolific session_id as unique identifier.
	 * - Pass all Prolific params for cohort separation.
	 */
	const prolificParams = JSON.parse(window.localStorage.getItem('prolific_params')) || {};

	posthog.identify(prolificParams.session_id, {
		...prolificParams
	});

	return;

	// return event.data;
}) satisfies LayoutLoad;
