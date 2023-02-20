

var subfooterPhone = document.querySelector('#subfooterPhone');
var subfooterName = document.querySelector('#subfooterName');
var subfooterButton = document.querySelector('#subfooterButton');



let maskOptions = {
	mask: '+38(000)000-00-00',
	lazy: false,
	placeholderChar: '_'
 };

 var mask = IMask(subfooterPhone, maskOptions);



 subfooterPhone.addEventListener('input', ()=>{

	if(mask.masked.isComplete){

		subfooterPhone.style.color = "#000";
		
	}else{
		subfooterPhone.style.color = "#898989";
		
	}

 });

const SUBFOOTER_SUCCSES = document.querySelector('.subfooter__send-form');

const SUBFOOTER_SUCCSES_CLOSE = document.querySelector('.subfooter__send-close');


SUBFOOTER_SUCCSES_CLOSE.addEventListener('click', ()=>{
	SUBFOOTER_SUCCSES.classList.remove('active');
});


 subfooterButton.addEventListener('click', ()=>{

	


			const CARS_CAR = document.querySelector("#subfooterTypeCar");

			const CARS_MODEL = document.querySelector("#subfooterModelCar");

			const CARS_YEAR = document.querySelector("#subfooterYearCar");

			const CAR_PRICE = document.querySelector("#subfooterPriceCar");
			


	
	if(subfooterName.value.length > 2){
		subfooterName.style.border = "2px solid transparent";
	}else{
		subfooterName.style.border = "2px solid red";
	}

	if(mask.masked.isComplete){
		subfooterPhone.style.border = "2px solid transparent";
	}else{
		subfooterPhone.style.border = "2px solid red";
	}

	if(CARS_CAR.value.length > 2){
		CARS_CAR.style.border = "2px solid transparent";
	}else{
		CARS_CAR.style.border = "2px solid red";
	}


	if(CARS_MODEL.value.length > 2){
		CARS_MODEL.style.border = "2px solid transparent";
	}else{
		CARS_MODEL.style.border = "2px solid red";
	}



	if(Number.isInteger(+CARS_YEAR.value) && +CARS_YEAR.value > 1800 && +CARS_YEAR.value < 2300){
	
		CARS_YEAR.style.border = "2px solid transparent";
	}else{
		CARS_YEAR.style.border = "2px solid red";
	}



let mainReg = subfooterName.value.length > 2 && mask.masked.isComplete && CARS_CAR.value.length > 2 && CARS_MODEL.value.length > 2 && Number.isInteger(+CARS_YEAR.value) && +CARS_YEAR.value > 1800 && +CARS_YEAR.value < 2300;

if(mainReg){
	
	subfooterButton.setAttribute("disabled", true);

	

	async function postMail(){
		    
		
		 
		 
		let res = await fetch("send", {
		  method: "POST",
		  body: JSON.stringify({
			 name: subfooterName.value,
			 tell: subfooterPhone.value,
			 car: CARS_CAR.value,
			 model: CARS_MODEL.value,
			 year: CARS_YEAR.value,
			 price: CAR_PRICE.value
		  }),
		});
	 
		if(res.ok){
			 

		   subfooterName.value = "";
			  subfooterPhone.value = "";
			  CARS_CAR.value = "";
			  CARS_MODEL.value = "";
			 CARS_YEAR.value = "";
			 CAR_PRICE.value = "";

		  SUBFOOTER_SUCCSES.classList.add('active');
		  subfooterButton.removeAttribute('disabled');
		 
	  
		}else{
		  alert('error send messange');
		}
		
	 
	 
	 postMail();
}

}
 });
const BURGER_BUTTON = document.querySelector('.header__burger');
const BURGER_BODY = document.querySelector(".header__body");
const BURGER_LINK = document.querySelectorAll(".header__body li");

 BURGER_BUTTON.addEventListener('click', function(){
	BURGER_BUTTON.classList.toggle('active');
	BURGER_BODY.classList.toggle('active');
 });

 BURGER_LINK.forEach(link=>{
	link.addEventListener("click", ()=>{
		BURGER_BODY.classList.toggle('active');
		BURGER_BUTTON.classList.toggle('active');
	})
 });


 let ATTAINMENT_COUNT_1 = document.querySelector(".count1");
 let ATTAINMENT_COUNT_2 = document.querySelector(".count2");
 let ATTAINMENT_COUNT_3 = document.querySelector(".count3").innerText;
 let ATTAINMENT_COUNT_4 = document.querySelector(".count4").innerText;


 let  ATTAINMENT_COUNT_1_CLEAN = +ATTAINMENT_COUNT_1.innerText;
 let  ATTAINMENT_COUNT_2_CLEAN = +ATTAINMENT_COUNT_2.innerText;
 let  ATTAINMENT_COUNT_3_CLEAN = ATTAINMENT_COUNT_3.replace(/\s+/g, '');
 let  ATTAINMENT_COUNT_4_CLEAN = ATTAINMENT_COUNT_4.replace(/\s+/g, '');

 

 function animateValue(el, start, end, duration) {
	let range = end - start;
	let current = start;
	let increment = end > start ? 1 : -1;
	let stepTime = Math.abs(Math.floor(duration / range));
	let obj = document.querySelector(el);
	let timer = setInterval(function() {
	  current += increment;
	  obj.innerHTML = current;
	  if (current == end) {
		 clearInterval(timer);
	  }
	}, stepTime);
	
 }


 function animateValue2(el, start, end, duration) {
	let range = end - start;
	let current = start;
	
	

	let obj = document.querySelector(el);


	let timer = setInterval(function() {

		if(current+5 >= end){
			
			current = end;
		}else{
			current += 5;
		}
	  
		obj.innerHTML = current;
	 
	}, 50);
	
 }


 function animateValue3(el, start, end, duration) {
	let range = end - start;
	let current = start;
	
	let obj = document.querySelector(el);

	let timer = setInterval(function() {

		if(current+100 >= end){
			
			current = end;
		}else{
			current += 100;
		}
	  
		obj.innerHTML = current;
	 
	}, 10);

 }


 function animateValue4(el, start, end, duration) {
	let range = end - start;
	let current = start;
	
	let obj = document.querySelector(el);

	let timer = setInterval(function() {

		if(current+522 >= end){
			
			current = end;
		}else{
			current += 522;
		}
	  
		obj.innerHTML = current;
	 
	}, 10);

 }

 
var element = document.querySelector(".bought__btn");

let flugCounter = true;


window.addEventListener("scroll", function() {

  var rect = element.getBoundingClientRect();
  var visible = (rect.top <= window.innerHeight / 2) && (rect.bottom >= window.innerHeight / 2);
  
  if (visible) {
	
	if(flugCounter){
	animateValue(".count1", 0, ATTAINMENT_COUNT_1_CLEAN , 1000) ;
	animateValue2(".count2", 0, ATTAINMENT_COUNT_2_CLEAN, 1000) ;
	animateValue3(".count3", 0, ATTAINMENT_COUNT_3_CLEAN, 1000) ;
	animateValue4(".count4", 0, ATTAINMENT_COUNT_4_CLEAN, 1000) ;
	}

	flugCounter = false;

  }
});











 $('document').ready(()=>{
	$('.accordion__btn').click(function(){
		$(this).next('.accordion__content').slideToggle();
		$(this).toggleClass('active');
	});
 });








