export function load(loadEvent) {
	const { url } = loadEvent;

	const params: URLSearchParams = url.searchParams;

	const prolific_id: string | null = params.get('PROLIFIC_PID');
	const study_id: string | null = params.get('STUDY_ID');
	const session_id: string | null = params.get('SESSION_ID');

	return {
		prolific_id,
		study_id,
		session_id
	};
}
