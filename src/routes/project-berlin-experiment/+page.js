export const ssr = false;
import { PUBLIC_EXTENSION_ID } from '$env/static/public';

/** @type {import('./$types').PageLoad} */
export async function load() {
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
