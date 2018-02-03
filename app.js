var app = new Vue({
	el: "#app",
	data: {
		phones:[
		  {
		  	id: 1,
		  	name: "Samsung Galaxy Note 8",
		  	photo: "samsung-galaxy-note-8.jpg",
		  	price: 949,
		  	memory: "Up to 64GB",
		  	size: "6.40 x 2.94 x 0.34",
		  	camera: "12MP",
		  	os: "Android 7 (Nougat)"
		  },{
		  	id: 3,
		  	name: "Apple Iphone X",
		  	photo: "apple-iphone-x.jpg",
		  	price: 999,
		  	memory: "64GB",
		  	size: "5.65 x 2.79 x 0.30",
		  	camera: "12MP",
		  	os: "iOS 11"
		  },{
		  	id: 9,
		  	name: "Apple Iphone 8 Plus",
		  	photo: "apple-iphone-8-plus.jpg",
		  	price: 799,
		  	memory: "64GB",
		  	size: "6.24 x 3.07 x 0.30",
		  	camera: "12MP",
		  	os: "iOS 11"
		  },{
		  	id: 14,
		  	name: "LG V30",
		  	photo: "lg-v30.jpg",
		  	price: 799,
		  	memory: "Up to64GB",
		  	size: "5.97 x 2.97 x 0.29",
		  	camera: "16MP",
		  	os: "Android 7 (Nougat)"
		  }
		],
		comparedItems:[]
	},
	methods:{
		addCompare(id){
			this.comparedItems.push(id);
		},
		isCompared(id){
			if (this.comparedItems.indexOf(id) > -1) {
				return true;
			}
		}
	}
})