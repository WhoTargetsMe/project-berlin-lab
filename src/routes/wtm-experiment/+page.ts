export const ssr = false;
import { isExtensionInstalled } from '$shared/checkExtension';
import { PUBLIC_EXTENSION_ID, PUBLIC_TARGET_POST_NUMBER } from '$env/static/public';
import { goto } from '$app/navigation';

/** @type {import('./$types').PageLoad} */
export async function load() {
	const hasExtension = await isExtensionInstalled;
	if (hasExtension !== true) {
		goto('../installation');
	}

	let postsRequest = new Promise((resolve, reject) => {
		chrome.runtime.sendMessage(
			PUBLIC_EXTENSION_ID,
			{ type: 'get_posts', data: { postNum: parseInt(PUBLIC_TARGET_POST_NUMBER) } },
			(data) => {
				if (data) {
					return resolve(data);
				} else {
					return reject('error message');
				}
			}
		);
	});

	return {
		posts: await postsRequest
	};
}
