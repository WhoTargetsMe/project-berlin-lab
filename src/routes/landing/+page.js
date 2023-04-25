export function load(loadEvent) {
  const { url } = loadEvent;

  const params = url.searchParams

  const prolific_id = params.get('PROLIFIC_PID');
	const study_id = params.get('STUDY_ID');
	const session_id = params.get('SESSION_ID');

  return {
    prolific_id,
    study_id,
    session_id
  }
}