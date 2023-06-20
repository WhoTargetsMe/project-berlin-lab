import { goto } from '$app/navigation';
export const ssr = false;
export function load() {
	if (window.chrome && window.chrome.runtime) {
		goto('../landing');
	}
	return {};
}
