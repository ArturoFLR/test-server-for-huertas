const publications = require("../data/publications");

function getBestPublications (number) {
	const publicationsCopy = structuredClone(publications);
	const publicationsCopyOrdered = publicationsCopy.sort( (a, b) => {
		if (a.score < b.score) {
			return 1;
		} else if (a.score > b.score) {
			return -1;
		}
		return 0;
	});

	const bestPublications = [];

	for (let i = 0; i < number; i++) {
		bestPublications.push(publicationsCopyOrdered[i]);
	}

	const response = [];
	bestPublications.map( (element) => {
		const newPublication = {
			id: element.id,
			author: element.author.name,
			mainImage: element.mainImage,
			title: element.title,
			mainText: element.mainText,
			publicationDate: element.publicationDate,
			score: element.score,
			comments: element.comments
		};

		response.push(newPublication);
	});

	return response;
}

module.exports = getBestPublications;