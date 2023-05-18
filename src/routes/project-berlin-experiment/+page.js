export const ssr = false;
const extensionId = 'pmncknofpdngpdahdmoibmeocdlaoneb';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let postsRequest = new Promise((resolve, reject) => {
		chrome.runtime.sendMessage(extensionId, { type: 'get_posts' }, (data) => {
			if (data) {
				return resolve(data);
			} else {
				return reject('error message');
			}
		});
	});
	console.log(await postsRequest);

	return {
		posts: await postsRequest
	};
}
