import { PUBLIC_EXTENSION_ID } from '$env/static/public';
import { isExtensionInstalled } from '$shared/checkExtension';
import { goto } from '$app/navigation';
export const ssr = false;

export async function load(loadEvent) {
	const { url } = loadEvent;

	const params: URLSearchParams = url.searchParams;

	const prolific_pid: string | null = params.get('prolific_pid');
	const study_id: string | null = params.get('study_id');
	const session_id: string | null = params.get('session_id');
	const form_id: string | null = params.get('form_id');

	let hasProlificParams = prolific_pid && study_id && session_id;

	if (hasProlificParams) {
		const prevProlificPid = JSON.parse(
			window.localStorage.getItem('prolific_params')!
		)?.prolific_pid;

		if (prevProlificPid !== prolific_pid && window.chrome.runtime) {
			window.chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, { type: 'clear_storage' });
		}
		window.localStorage.clear();
		window.localStorage.setItem(
			'prolific_params',
			JSON.stringify({ prolific_pid, study_id, session_id, form_id })
		);
	}
	const hasExtension = await isExtensionInstalled;

	if (hasExtension !== true) {
		goto('../installation');
	}

	return {
		prolific_pid,
		study_id,
		session_id,
		hasProlificParams
	};
}
