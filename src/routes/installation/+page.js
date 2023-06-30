import { goto } from '$app/navigation';

export const ssr = false;
export function load() {
	const prolific_params = JSON.parse(window.localStorage.getItem('prolific_params')) || {};

	const { prolific_pid, study_id, session_id, form_id } = prolific_params;
	const hasProlificParams = prolific_pid && study_id && session_id;
	const hasExtension = window.chrome && window.chrome.runtime;
	const landingPageUrl = `/landing?prolific_pid=${prolific_pid}&study_id=${study_id}&session_id=${session_id}&form_id=${form_id}`;

	if (hasExtension && hasProlificParams) {
		window.location.href = landingPageUrl;
	} else if (!hasExtension) {
		return;
	} else if (!hasProlificParams) {
		goto('../landing');
	}
}
