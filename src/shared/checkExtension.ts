import { browser } from '$app/environment';
import { PUBLIC_EXTENSION_ID } from '$env/static/public';

export const isExtensionInstalled = new Promise((resolve) => {
	if (browser && window.chrome.runtime) {
		window.chrome.runtime.sendMessage(
			PUBLIC_EXTENSION_ID,
			{
				type: 'is_installed'
			},
			function (resp: boolean) {
				if (chrome.runtime.lastError) return resolve('extension not installed');
				return resolve(resp);
			}
		);
	} else return resolve('extension not installed');
});
