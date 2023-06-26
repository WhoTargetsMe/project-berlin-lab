import { goto } from '$app/navigation';
export const ssr = false;
export function load() {
	const prolific_params = JSON.parse(window.localStorage.getItem('prolific_params')) || {};

	const { prolific_pid, study_id, session_id, form_id } = prolific_params;
	const hasProlificParams = prolific_pid && study_id && session_id;

	if (window.chrome && window.chrome.runtime && hasProlificParams) {
		window.location.href = `/landing?prolific_pid=${prolific_pid}&study_id=${study_id}&session_id=${session_id}&form_id=${form_id}`;
	} else if (!hasProlificParams) {
		goto('../landing');
	}
	return {};
}