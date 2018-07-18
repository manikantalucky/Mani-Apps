function getfile(file,callback) {

var xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange = function(){
  if(xhr.readyState === 4 && xhr.status == "200"){
  callback(xhr.responseText);

}
};
xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
    var data1 = JSON.parse(text);
  console.log(data);
  details(data.basic);
  career(data1.CareerObject);
})


var child = document.querySelector(".childone");

function details(det) {
  var img = document.createElement("img");
 img.src = det.image;
child.appendChild(img);
var name = document.createElement("h3");
name.textContent = det.name;
child.appendChild(name);
var number = document.createElement("h3");
number.textContent = det.phoneno;
child.appendChild(number);
var mail = document.createElement("a");
mail.herf =" mailto:manikantaluckyjannu@gmail.com";
mail.textContent = det.email;
child.appendChild(mail);

var address1 = document.createElement("h2");
address1.textContent = "Address";
child.appendChild(address1);
var line = document.createElement("hr");
child.appendChild(line);

var address = document.createElement("p");
address.textContent = det.Address;
child.appendChild(address);
}
var child2 = document.querySelector(".childtwo");
function career(careerinfo){

  var car1 = document.createElement("h3");
  car1.textContent = "CareerObject:";
  child2.appendChild(car1);
  var lin = document.createElement("hr");
  child2.appendChild(lin);
  var car = document.createElement("h3");
  car.textContent = careerinfo.info;
  child2.appendChild(car);

}
