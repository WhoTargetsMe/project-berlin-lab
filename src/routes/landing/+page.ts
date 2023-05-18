export function load(loadEvent) {
	const { url } = loadEvent;

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
