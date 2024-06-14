console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


// step1.
let x = Math.ceil(Math.random() * 10);
let input = prompt("please input number");
console.log(input);

if(input < x)
 {
  console.log("too low");
}
else if(input > x)
  {
  console.log("too high");
}
else(input == x) 
 {
  console.log("Congratulations");
}

// step2

let month = prompt( "Enter your Birth Month: ");
console.log(month);

switch(month){
  case "January":
    console.log("Winter");
    break;
  case "February":
    console.log("Winter");
    break;
  case "March":
    console.log("Spring");
      break;
  case "April":
    console.log("Spring");
      break;
  case "May":
    console.log("Spring");
      break;
  case "June":
    console.log("Summer");
      break;
  case "July":
    console.log("Summer");
      break;
  case "August":
    console.log("Summer");
      break;
  case "September":
    console.log("Autumn");
      break;
  case "October":
    console.log("Autumn");
      break;
  case "November":
    console.log("Autumn");
      break;
  default:
    console.log("Winter");
      break;
          
}

//step3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch(typeId){
  case "01": 
  type = "Tank top";
  break;
  case "02":
  type = "T-Shirt";
  break;
  case "03":
  type = "Long Sleeve";
  break;
  case "04":
  type == "Sweat Shirt";
  break;
  default:
  type = "Other";
}
  console.log(type);

switch(colorId){
  case "BL":
  color = "Black";
case "BL": 
  color = "Blue";
  break;
case "RD":
  color = "Red";
  break;
case "PU":
  color = "Purple";
  break;
default:
  color = "White";
}
  console.log(color);


switch(sizeId){
case "S": 
  size = "Small";
  break;
case "M":
  size = "Medium";
  break;
case "L": 
  size = "Large";
  break;
case "XL":
  size = "Extra Large";
  break;
default:
  size = "One Size Fits All";
}


