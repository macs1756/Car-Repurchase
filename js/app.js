

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

	


			const TYPE_CAR = document.querySelector("#subfooterTypeCar");

			const TYPE_MODEL = document.querySelector("#subfooterModelCar");

			const TYPE_YEAR = document.querySelector("#subfooterYearCar");

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

	if(TYPE_CAR.value.length > 2){
		TYPE_CAR.style.border = "2px solid transparent";
	}else{
		TYPE_CAR.style.border = "2px solid red";
	}


	if(TYPE_MODEL.value.length > 2){
		TYPE_MODEL.style.border = "2px solid transparent";
	}else{
		TYPE_MODEL.style.border = " 2px solid red";
	}



	if(Number.isInteger(+TYPE_YEAR.value) && +TYPE_YEAR.value > 1800 && +TYPE_YEAR.value < 2300){
	
		TYPE_YEAR.style.border = "2px solid transparent";
	}else{
		TYPE_YEAR.style.border = "2px solid red";
	}



let mainReg = subfooterName.value.length > 2 && mask.masked.isComplete && TYPE_CAR.value.length > 2 && TYPE_MODEL.value.length > 2 && Number.isInteger(+TYPE_YEAR.value) && +TYPE_YEAR.value > 1800 && +TYPE_YEAR.value < 2300;

if(mainReg){
	
	subfooterButton.setAttribute("disabled", true);

	

	async function postMail(){
		    
		
		 
		 
		let res = await fetch("send", {
		  method: "POST",
		  body: JSON.stringify({
			 name: subfooterName.value,
			 tell: subfooterPhone.value,
			 car: TYPE_CAR.value,
			 model: TYPE_MODEL.value,
			 year: TYPE_YEAR.value,
			 price: CAR_PRICE.value
		  }),
		});
	 
		if(res.ok){
			 

		   subfooterName.value = "";
			  subfooterPhone.value = "";
			  TYPE_CAR.value = "";
			  TYPE_MODEL.value = "";
			 TYPE_YEAR.value = "";
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

 

 $('document').ready(()=>{
	$('.accordion__btn').click(function(){
		$(this).next('.accordion__content').slideToggle();
		$(this).toggleClass('active');
	});
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






