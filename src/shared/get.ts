export const getPostType = (post) => {
	if (post.edges) {
		return post.edges[0].category;
	} else {
		return post.category;
	}
};

export const getRepost = (post) => {
	return post.node?.comet_sections?.content?.story.attached_story;
};
