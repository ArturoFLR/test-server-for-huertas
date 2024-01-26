const users = require("./users");

const publications = [
	{
		id: "4811578",
		title: "Quisque finibus ex pulvinar",
		author: users[1],
		publicationDate: "2024-01-25T12:15:06.654Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/tomates.jpg",
		comments: [
			{
				id: "7555880",
				author: users[0],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T12:38:01.760Z"
			}
		],
		score: 5,
		authorizationStatus: {
			id: "3272199",
			state: "approved"
		}
	},
	{
		id: "4447992",
		title: "Mauris tincidunt ut velit",
		author: users[3],
		publicationDate: "2024-01-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/riego.jpg",
		comments: [
			{
				id: "2983693",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T16:27:50.753Z"
			},
			{
				id: "322917",
				author: users[0],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2024-01-25T16:36:12.162Z"
			}
		],
		score: 7,
		authorizationStatus: {
			id: "228181",
			state: "approved"
		}
	}

];




module.exports = publications;