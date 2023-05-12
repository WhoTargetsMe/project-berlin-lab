export const getLocalStorage = () => {
	const postsCollected = localStorage.getItem('posts');
	console.log(postsCollected);
};
