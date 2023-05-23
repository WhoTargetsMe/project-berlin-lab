import { PUBLIC_EXTENSION_ID } from '$env/static/public';
import { goto } from '$app/navigation';
export const ssr = false;

export function load(loadEvent) {
	const { url } = loadEvent;

	const params: URLSearchParams = url.searchParams;

	const prolificId: string | null = params.get('prolific_pid');
	const studyId: string | null = params.get('study_id');
	const sessionId: string | null = params.get('session_id');
	const formId: string | null = params.get('form_id');

	let hasProlificParams = prolificId && studyId && sessionId;

	if (hasProlificParams) {
		window.localStorage.clear();
		window.localStorage.setItem(
			'prolific_params',
			JSON.stringify({ prolificId, studyId, sessionId, formId})
		);
	}

	// This only works in Chrome
	if (!window.chrome || !window.chrome.runtime) {
		goto('../installation');
	} else {
		window.chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, {
			type: 'is_installed'
		});
	}

	return {
		prolificId,
		studyId,
		sessionId,
		hasProlificParams
	};
}
