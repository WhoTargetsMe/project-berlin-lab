import { PUBLIC_EXTENSION_ID } from '$env/static/public';
import { goto } from '$app/navigation';
export const ssr = false;

export function load(loadEvent) {
	const { url } = loadEvent;

	const params: URLSearchParams = url.searchParams;

	const prolific_pid: string | null = params.get('prolific_pid');
	const study_id: string | null = params.get('study_id');
	const session_id: string | null = params.get('session_id');

	window.localStorage.clear();
	window.localStorage.setItem(
		'prolific_params',
		JSON.stringify({ prolific_pid, study_id, session_id })
	);

	if (!window.chrome || !window.chrome.runtime) {
		goto('../installation');
	}

	const isExtensionInstalled: string | null = chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, {
		type: 'is_installed'
	});

	return {
		prolific_pid,
		study_id,
		session_id,
		isExtensionInstalled // is this used?
	};
}
