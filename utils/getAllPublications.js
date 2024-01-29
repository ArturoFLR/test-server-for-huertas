const publications = require("../data/publications");

function getAllPublications () {
	const response = [];

	publications.map( (element) => {
		response.push(
			{
				id: element.id,
				title: element.title,
				author: element.author.name,
				publicationDate: element.publicationDate,
				mainImage: element.mainImage,
				comments: element.comments,
				score: element.score,
				mainText: element.mainText
			}
		);
	});

	return response;
}

module.exports = getAllPublications;