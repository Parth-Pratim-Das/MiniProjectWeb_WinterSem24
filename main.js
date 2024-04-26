



var myData = [
    [330, 41],
    [365, 158],
    [380, 187],
    [673, 226],
    [572, 281],
    [275, 347],
    [364, 474],
    [416, 472],
    [373, 535]
];

let cities = JSON.parse(localStorage.getItem('cities')) || [];
// function swapArrayElements(arr, index1, index2) {
//     const temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }

let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
let watchCount = watchlist.length;
function addToWatchList(value,loc) {
    let parent = document.querySelectorAll(".watchlist-btn")[value-1].parentNode;
    let word = parent.childNodes[1].innerText;
    watchlist.push(word);
    watchCount++;
   
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    // console.log(watchlist);
    
	let coordinates = myData[loc - 1];
	// console.log(coordinates);
    cities.push(coordinates);
    localStorage.setItem('cities', JSON.stringify(cities));
    //
    // cities.push(myData[loc-1]);
	// console.log(myData[loc-1]);


	// locTag =document.createElement("img").src="./images/loc.png";
	// locTag.height="2px";
	// locTag.width="2px";
	// locTag.style.position = "absolute";
    // locTag.style.top = coordinates[1] + "px";
    // locTag.style.left = coordinates[0] + "px";
	// locTag.style.top='${coordinates[1]}';
	// locTag.style.left='${coordinates[1]}';
	// locTag.style.zIndex="2";
	
	// document.body.appendChild(locTag);



    
    // for(let i=0;i<cities.length;i++)
	// {
	// 	for(let j=0;j<cities.length;j++)
	// 	{
	// 		if(cities[i][1]>cities[j][1])
	// 		{
	// 			swapArrayElements(cities,i,j);
	// 		}
	// 	}	
	// }
// console.log(cities);


}




/*
srinagar 330 41 px
delhi 365 158
agra 380 187
imphal 673 226
kolkata 572 281
mumbai 275 347
bangalore 364 474
chennai 416 472
madurai 373 535


*/


function showWatchList() {
    // console.log(watchlist);

    var ptag = document.createElement("p");
    var oltag = document.createElement("ol");
  
    var ptext = document.createTextNode("Destinations: ");
    // ptext.style.fontWeight="bold";
    // ptext.style.fontSize="20px";


    ptag.appendChild(ptext);

    for (let i = 0; i < watchCount; i++) {
        var liTag = document.createElement('li');
        var litext = document.createTextNode(watchlist[i]);
        liTag.appendChild(litext);

        // liTag.style.margin="2px";
        oltag.appendChild(liTag);
    }

    document.body.appendChild(ptag);
    document.body.appendChild(oltag);

	// if(cities.length>=2)
	// {

	

	
	
    
}
function clearWatchList() {
    watchlist = []; 
    watchCount = 0; 
	cities=[];
    localStorage.removeItem('watchlist');
    localStorage.removeItem('cities'); 

    console.log("Watchlist cleared");




    oltag =document.getElementsByTagName("ol");
    while(oltag[0].firstChild) {
        oltag[0].removeChild(oltag[0].firstChild);
    }
	
}



let places = [
	{
		name: "Taj Mahal",
		des:            "                Taj Mahal One of the Seven Wonders , present here in India made my Muhghal Emperor Shah Jahan in name of his dead wife Mumtaz Mahal A super sight!! "
			,
		image: "./images/agraTaj.jpg"
	},
	{
		name: "Marina Beach",
		des:
			"Most populous beach of Chennai",
		image: "./images/chennaiMarina.jpg"
	},
	{
		name: "Red Fort",
		des:
			"One of the most ancient political monuments in the country",
		image: "./images/delhiFort.jpg"
	},
	{
		name:" Elephanta Falls",
		des:
			"Gateway to Refreshness in Shillong",
		image: "./images/elephantFallsShillong.jpg"
	},
	{
		name: "Gateway of India",
		des:
			"Historic Building of Bombay and welcoming  monument for visitors from abroad  ",
		image:"./images/gatewayMumbai.jpg" 
	}
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
	if (slideIndex >= places.length) {
		slideIndex = 0;
	}

	//creating DOM element
	let slide = document.createElement("div");
	let imgElement = document.createElement("img");
	let content = document.createElement("div");
	let h1 = document.createElement("h1");
	let p = document.createElement("p");

	//attaching all the elements
	imgElement.appendChild(document.createTextNode(""));
	h1.appendChild(document.createTextNode(places[slideIndex].name));
	p.appendChild(document.createTextNode(places[slideIndex].des));
	content.appendChild(h1);
	content.appendChild(p);
	slide.appendChild(content);
	slide.appendChild(imgElement);
	carousel.appendChild(slide);

	//setting up image
	imgElement.src = places[slideIndex].image;
	slideIndex++;

	//setting elements classname
	slide.className = "slider";
	content.className = "slide-content";
	h1.className = "movie-title";
	p.className = "movie-des";

	sliders.push(slide);

	//adding sliding effect
	if (sliders.length) {
		sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
			30 * (sliders.length - 2)
		}px)`;
	}
};

for (let i = 0; i < 3; i++) {
	createSlide();
}

setInterval(() => {
	createSlide();
}, 3000);

//video cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
	item.addEventListener("mouseover", () => {
		let video = item.children[1];
		video.play();
	});

	item.addEventListener("mouseleave", () => {
		let video = item.children[1];
		video.pause();
	});
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
	let containerDimensions = item.getBoundingClientRect();
	let containerWidth = containerDimensions.width;

	nxtBtns[i].addEventListener("click", () => {
		item.scrollLeft += containerWidth - 200;
	});

	preBtns[i].addEventListener("click", () => {
		item.scrollLeft -= containerWidth + 200;
	});
});