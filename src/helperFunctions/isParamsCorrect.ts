function isParamsCorrect() {
	const windowUrl: string = window.location.search;
	const urlParams: URLSearchParams = new URLSearchParams(windowUrl);

	const prolific_id: string | null = urlParams.get('PROLIFIC_PID');
	const study_id: string | null = urlParams.get('STUDY_ID');
	const session_id: string | null = urlParams.get('SESSION_ID');

	if (prolific_id === null || study_id === null || session_id === null) {
		return false;
	}
	return true;
}
