import { PUBLIC_EXTENSION_ID } from '$env/static/public';

export const ssr = false;

export function load(loadEvent) {
	const { url } = loadEvent;

	chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, { type: 'is_installed' }, (resp) => {
		console.log({ resp });
	});

	const params: URLSearchParams = url.searchParams;

	const prolific_id: string | null = params.get('prolific_pid');
	const study_id: string | null = params.get('study_id');
	const session_id: string | null = params.get('session_id');

	return {
		prolific_id,
		study_id,
		session_id
	};
}
