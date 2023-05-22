import { PUBLIC_EXTENSION_ID } from '$env/static/public';
import { goto } from '$app/navigation';
export const ssr = false;

export function load(loadEvent) {
	const { url } = loadEvent;

	const params: URLSearchParams = url.searchParams;

	const prolific_id: string | null = params.get('prolific_pid');
	const study_id: string | null = params.get('study_id');
	const session_id: string | null = params.get('session_id');

	if (!chrome.runtime) {
		goto('../installation');
	}

	const isInstalled: string | null = chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, {
		type: 'is_installed'
	});

	return {
		prolific_id,
		study_id,
		session_id,
		isInstalled
	};
}
