import { fromUnixTime } from 'date-fns';
import { getPostType } from '../shared/get';
import { JSONPath } from 'jsonpath-plus';

export const facebookNewsFeedInterceptedJSONExtractor = (data) => {
	const jsonPath = (path: string) => {
		return JSONPath({ path: path, json: data });
	};

	let post_id: number;
	let creation_time: Date | string;
	let type: string;
	let scope: string;
	let summary: string;
	let source: { url: string };
	let content: {
		actor: { name: string; url: string };
		attachment: { image: string; gallery: []; text: string; video: string };
	};
	let engagement: {
		comments: string | number;
		reactions: { total: string; types: {} };
		shares: string | number;
	};
	if (data) {
		type = jsonPath('$..category')[0];
		post_id = jsonPath('$..post_id')[0];

		if (type === 'ORGANIC' || type === 'ENGAGEMENT') {
			creation_time = fromUnixTime(jsonPath('$..creation_time')[0]);
		} else {
			creation_time = 'no post creation time';
		}

		scope = jsonPath('$..privacy_scope.description')[0];
		summary = jsonPath('$..accessibility_caption')[0];
		source = jsonPath('$..wwwURL')[0];

		//CONTENT
		let actorName = jsonPath('$..actors[0].name')[0];
		let actorURL = jsonPath('$..actors[0].url')[0];
		let actor = { name: actorName, url: actorURL };
		let postImage =
			jsonPath('$..photo_image.uri')[0] || jsonPath('$..large_share_image.uri')[0] || null;
		let postText = jsonPath('$..message.text')[0] || null;
		let sponsoredGallery = jsonPath('$..attachment.subattachments')[0];
		let galleryOfTheRest = jsonPath('$..all_subattachments.nodes')[0];

		let gallery;
		if (galleryOfTheRest) {
			gallery = galleryOfTheRest;
		} else if (sponsoredGallery) {
			gallery = sponsoredGallery;
		} else {
			gallery = null;
		}

		let video;
		if (!jsonPath('$..playable_url').length) {
			video = null;
		} else {
			video = jsonPath('$..playable_url');
		}

		let attachment = { image: postImage, text: postText, gallery: gallery, video: video };
		content = { actor, attachment };

		//ENGAGEMENT
		let comments = jsonPath('$..total_comment_count')[0];
		let shares = jsonPath('$..i18n_share_count')[0];
		let reactionTypes = jsonPath('$..top_reactions.edges')[0];
		let total = jsonPath('$..[i18n_reaction_count')[0];
		let reactions = { total, types: reactionTypes };
		engagement = { comments, shares, reactions };

		let postMetaData = {
			// post_id,
			creation_time,
			type,
			scope,
			source,
			summary,
			content,
			engagement
		};

		return postMetaData;
	}
};
