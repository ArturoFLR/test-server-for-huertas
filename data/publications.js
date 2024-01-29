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
		},
		mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et odio at orci tincidunt porttitor. Donec consequat lacus vel malesuada ullamcorper. Nulla interdum mattis augue at imperdiet. Donec tincidunt facilisis mollis. Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula. Curabitur mollis arcu rutrum sapien sodales semper. Etiam eget varius sapien. Mauris aliquet sem ac felis dignissim hendrerit. Aenean fermentum sem a turpis pulvinar eleifend. Sed accumsan tellus vitae enim finibus, in accumsan ipsum luctus. Morbi placerat risus eu dapibus pellentesque. Proin lectus tellus, dapibus ac scelerisque id, luctus ut risus. Duis sed nulla eget lectus suscipit blandit vel ut nibh."
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
		},
		mainText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et odio at orci tincidunt porttitor. Donec consequat lacus vel malesuada ullamcorper. Nulla interdum mattis augue at imperdiet. Donec tincidunt facilisis mollis. Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula."
	},
	{
		id: "10020495",
		title: "Aenean tristique ipsum eros",
		author: users[0],
		publicationDate: "2022-01-25T16:23:02.987Z",
		visibility: true,
		mainImage: "http://localhost:3000/images/pepinos.jpg",
		comments: [
			{
				id: "11563693",
				author: users[1],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-01-25T16:27:50.753Z"
			},
			{
				id: "35572917",
				author: users[3],
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt ut velit ut consequat. Donec aliquet finibus sollicitudin. Quisque finibus ex pulvinar ligula venenatis, vitae porttitor enim varius. Cras imperdiet nunc et pretium pharetra. Ut quis aliquet ligula, ut tempor nulla. Suspendisse potenti. Vivamus eu ante in ex tincidunt laoreet at quis odio. Phasellus elementum tempus lectus, vel auctor nisl dictum non. Aenean tristique ipsum eros, et maximus sem commodo ut. Pellentesque in pellentesque lacus. Pellentesque quis malesuada purus.",
				publicationDate: "2023-01-25T16:36:12.162Z"
			}
		],
		score: 7,
		authorizationStatus: {
			id: "7281531",
			state: "approved"
		},
		mainText: "Nam tempor magna porta est vehicula vestibulum. Proin pulvinar mi in vehicula tincidunt. Aenean nec purus elementum, volutpat justo in, cursus metus. Sed urna ipsum, vestibulum at mattis ac, rhoncus eu libero. Morbi viverra neque quis pellentesque varius. Quisque sollicitudin vulputate leo, ut feugiat ipsum euismod ut. Integer ipsum mauris, tincidunt et nibh et, vestibulum pretium ex. Proin laoreet risus quis semper pulvinar.	Aliquam erat volutpat. Mauris in auctor nisl. Nulla suscipit id mi sit amet faucibus. Phasellus vel felis ipsum. Cras euismod quam vel diam accumsan, nec volutpat dui porttitor. Integer lacinia tempus scelerisque. Donec condimentum ante non tellus consectetur, fermentum mollis nisi imperdiet. Maecenas nec dolor id diam pellentesque faucibus sed ac nibh. Vestibulum quis egestas nisi. Aenean euismod, turpis at tincidunt imperdiet, mauris felis sollicitudin diam, eu volutpat velit purus quis felis. Phasellus nunc ligula, consectetur nec sem quis, eleifend aliquam odio. Cras rutrum, urna eu viverra vulputate, elit dui vestibulum libero, ac dictum quam enim at justo. Sed placerat eu magna sed commodo. Vivamus vitae gravida nisi. Aenean varius est sapien, nec mollis lacus ultrices vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras nec purus faucibus, vehicula urna eu, facilisis dolor. Quisque eu nunc at neque tristique laoreet. Praesent lacus lacus, mattis varius dolor eu, consectetur eleifend tortor. Aliquam ultricies venenatis ante, sit amet sagittis odio malesuada id. Nulla id maximus purus. Aliquam interdum consectetur mauris. Integer nibh lorem, ultrices eu sapien nec, fringilla dignissim lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis iaculis eleifend interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Integer ut nunc venenatis, suscipit sem ut, placerat erat. Duis porttitor feugiat diam non faucibus. Nullam condimentum mi lorem, ac sagittis augue fringilla eu. Mauris leo turpis, vulputate in massa et, varius sollicitudin quam. Vestibulum non egestas mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc mauris est, lobortis vel diam nec, feugiat auctor lacus. Suspendisse vitae pharetra nisi, id congue velit. Quisque finibus augue sed purus commodo, et cursus eros fermentum. In hendrerit arcu non eros laoreet, a aliquam purus lacinia. Phasellus felis magna, varius in scelerisque luctus, pulvinar sit amet risus. Curabitur blandit interdum vehicula. Curabitur mollis arcu rutrum sapien sodales semper. Etiam eget varius sapien. Mauris aliquet sem ac felis dignissim hendrerit. Aenean fermentum sem a turpis pulvinar eleifend. Sed accumsan tellus vitae enim finibus, in accumsan ipsum luctus. Morbi placerat risus eu dapibus pellentesque. Proin lectus tellus, dapibus ac scelerisque id, luctus ut risus. Duis sed nulla eget lectus suscipit blandit vel ut nibh."
	}


];




module.exports = publications;