export const ssr = false;
import { PUBLIC_EXTENSION_ID } from '$env/static/public';
import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load() {
	// This only works in Chrome
	if (!window.chrome || !window.chrome.runtime) {
		goto('../installation');
	} else {
		window.chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, {
			type: 'is_installed'
		});
	}

	let postsRequest = new Promise((resolve, reject) => {
		chrome.runtime.sendMessage(PUBLIC_EXTENSION_ID, { type: 'get_posts' }, (data) => {
			if (data) {
				return resolve(data);
			} else {
				return reject('error message');
			}
		});
	});

	return {
		posts: await postsRequest
	};
}
