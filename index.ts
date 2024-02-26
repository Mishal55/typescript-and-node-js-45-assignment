//task no 2
let personname: string ="Eric";
console.log("Hello ${personName}, would you like to learn python today?");

//task no 3
let personName_:string= "mishal nadeem";
//in lowercase
console.log("lowercase:",personName_. toLowerCase());
//in uppercase
console.log("uppercase:",personName_. toUpperCase());
//title case
console.log("titlecase:",personName_.replace(/\b\w/g,c=> c. toUpperCase()));

// task no 4
let quote: string= "A person who never made a mistake never tried of anything new";
let author: string= " Albert Enstein";
console.log('${author} once said,"${quote}"');

//task no 5

let famous_person: string= "Albert Enstein";
let messages:string='${famous_person} once said,"${quote}"';
console.log(messages);

//task no 6

let personName: string ="\t\n John \n\t";
console.log(" orignal:",personName);
console. log("Stripped:",personName.trim());

// task no 7,8
console.log(5+3);
console.log(10-2);
console.log(4*2);
console.log(16/2);

//task no 9
let favoritenumber: number=5;
console.log(`My favorite number is ${favoritenumber}.`);



//task no 10
  //Author:[ mishal]
//date:[sat feb 11,2024]

//task no 11
let Name:string []=["Ali","Noman","Adnan","John"];
console.log(Name[0]);
console.log(Name[1]);
console.log(Name[2]);
console.log(Name[3]);

//task no 12
let name_:string []=["Ali","Noman","Adnan","John"];

let message: string= "Do you like to play football?"

console.log(Name [0] +" "+ message);
console.log(Name [1] +" "+ message)
console.log(Name [2] +" "+ message);
console.log(Name [3] +" "+ message);

//task no 13
let transportation: string []= [" Honda motorcycle","civil","Audi","honda city"];
transportation.map((items) => console.log(`I would like to own a ${ items}`));

//task no 14
let guestArrs: string []= [" Honey","Usia","Abhi","hamza"];

guestArrs.map((items) => ( console.log('Dear ${items} , ou are invited to the Dinner')));*/

//task no 15

let guestArr1: string []= [" Mishal","Usia","Abhi","hamza"];
let cannotAttends:string="Abhi"

console.log( cannotAttends + " " "cannotAttends the dinner,")

let newguests:string = "sunaina"

guestArr1 [guestArrs.indexOf(cannotAttends)]=newguests;

console.log(guestArrs)
 guestArr1.map((items)=> console.log(`Dear ${items},You are invited to the dinner.`));

//task no 16
 let guestArr: string[]=["alishba","haseeb","Ali","Hamza"]
 let cannotAttend:string="Ali"
 let newguest:string="wajahat"

 guestArr[guestArr.indexOf(cannotAttend)]= newguest;
 console.log(guestArr)

 guestArr.map((items)=>

console.log(`Dear ${items},I found a bigger table so Iam invited more people.`));

//part 2
let guestbeg:string= "Asif"
guestArr.unshift(guestbeg);
console.log(guestArr)

//part 3 middle
let middleguest:string="fatima"

let middleindex= guestArr.length/3

guestArr.splice(middleindex,0,middleguest)

console.log(guestArr)

//part 4 append
guestArr.push( "Zeeshan")

console.log(guestArr)

//part 5
guestArr.map((items)=>console.log(`Dear ${items}, you are invited in the more people category on dinner`));

//task 17 initil list of guests

let guests: string[]=["Alia","Bilal","Carry","hamza"];
 console.log("Due to limited space, only two people can be invited for dinner");

while( guests.length > 2){
const removedguest = guests.pop();
console.log{`Sorry ${removedguest},you re no longer invited to dinner.`};

guests.forEach((guest)=>{ console.log(`Dear ${guest},you re still invited dinner.`)});
guests.pop();
guests.pop();

console.log("finl guest list:",guests);
}
//task no 18

let placetovisit:string[]=["tokyo","china","America","pakistan","japan"];

console.log("orignal order",placetovisit);

console.log("Alphabetical order:",[...placetovisit].sort());

console.log("orignal order after sorting",placetovisit);

console.log("Reverse alphabeticl order",[...placetovisit].sort().reverse());

console.log("orignal order after reverse sorting:",placetovisit);

placetovisit.reverse();

console.log("Reverse order:",placetovisit);

placetovisit.reverse();
console.log("back to orignal order:",placetovisit);

placetovisit.sort((a,b) => b.localeCompare(a));
console.log("Sort in reverse alphabetical order:",placetovisit);

//task no 19

let invitation:string[] =["Ali","Bilal"]
let const_invitation:number=invitation.length

console.log('${const_invitation} people will come to the dinner')

// task no 20
let countrys: string []=["pakistan","India","China","japan","Newyork"]
console.log("List of country");
console.log( countrys);

//task no 21
let person:{ name:string, fname:string, age:number} ={name:"Mishal",fname:"female",age:22}
console.log(person)

//task no 22
 const days: string []=["Sunday","Monday","Tuesday","Wednessday","thursday","friday","saturday"]
//console.log(days{7})
console.log(days[6])

//task no 23
 let car = "subaru";

console.log("is car == 'subaru'? predict true")
console.log(car =='subaru')

console.log("is car == Honda city? predict true" )
console.log(car != 'Honda city')


console.log(" is car =='subaru?'predict false" )
console.log( car =='Subaru')

console.log(" is car =='SUBARU?'predict false" )
console.log( car =='SUBARU')

console.log(" is car length =='3?'predict true" )
console.log( car.length == 3)

console.log(" is car length !='10?'predict true" )
 console.log( car.length != 10)

console.log(" is 10 > 45?'predict false" )
console.log( 10 > 45)

console.log(" is 3 <= 2?'predict false" )
console.log( 3 <= 2)

console.log(" is 72 >= 83?'predict false" )
console.log( 72 >= 83)

console.log(" is car=='subaru && car.length==6? predict true")
 console.log(car == 'subaru'&& car.length==6)

//task no 24

let name_1: string =" Mishal"
let name_2: string =" Sunaina"
let name_3: string =" Liza"

if( name_1== name_3){
 console.log("name are equal")
} else{
 console.log("names are not equal")
}

if(name_1 != name_2){
 console.log(" names are equal")
} 
if(name_1 != name_3){
 console.log(" names are equal")
} 

let age_1: number= 18
let age_2: number= 22
if(age_1==18){
 console.log("eligibal for vote")
}
if(age_1!=22){
 console.log("eligibal for vote is older category")
}
if(age_1 <=age_2){
console.log("younger")}

if(age_2 >= age_1){
   console.log("older")}
   if(age_1==18 && age_2==22){
console.log("person is eligible for vote")}

 if(age_1!=18 && age_2!=22){
 console.log("person is eligible not for vote")}

let country: string[]= ["Pakistan", "China","Inia","Canada"]
if( country.includes("Pakistan"))
console.log(" Pakistan is in country list")

if(!country.includes("America")){
console.log("america is not in an array")}


//task no 25
let alein_color: string="green"

if (alein_color=="green")
console.log("You earn 5 points")

let alein_colors: string="red"

if (alein_colors=="red"){
console.log(" no output")}

//task no 26
let alein_Color:string ="green";

if (alein_color=="green"){
console.log("players just earned 5 points for shooting the alein")
} else {
 console.log(" player just earned 10 points")
 }

let alein_Color1 ="pink"

if (alein_color=="pink"){
console.log("players just earned 5 points for shooting the alein")
} else{
  console.log(" player just earned 10 points")
 }


//task no 27
let Alein_color: string ="yellow"

if (Alein_color =="green") {
 console.log(" 5 points")
} else if ( Alein_color =="yellow") {
  console.log("10 points")
} else{
console.log("15 ponts") }

//task no 28
let age: number = 54
if(age< 2){
 console.log("you are a baby")
}else if(age< 4){
console.log("you are a toddler")
}else if(age< 13){    
 console.log("you are a kid")
} else if(age< 20) { 
  console.log("you are a Teenager")
} else if(age< 65){   
 console.log("you are a Adultr")
} else {
console.log(" you are older")}
//task no 29

let favorite_fruits: string [] =["kivi","orange","apples","berry","peach"]
if (favorite_fruits.includes("kivi")) {
 console.log("kivi")
 }
if (favorite_fruits.includes("peach")) {
   console.log("you realy like bananas")
}
if (favorite_fruits.includes("orange")) {
 console.log("orange")
}       
if (favorite_fruits.includes("berry")) {
console.log("you realy like bananas")
}
if(favorite_fruits.includes("apples")){
console.log("apples") }

//task no 30
let users: string[] =["admin","eric","fatima","haseeb","ali"]

for( let user of users)
 if(user==="admin"){
  console.log("Hello admin,would you like to see a status report")
}else{
 console.log('Hello ${ user}, Thnk you for logging in agin')
 }
// task no 31
let user: string[] =["admin","eric","haseeb","ali"]

if (user.length===0){
console.log("we need to find some users")
} else {
 for(let user of users)
 if(user ==="admin")
 } console.log(`Hello admin,would you like to see a status report`)
 {
}
user =[]
if(user.length=== 0){
console.log("we need to find some user!")
}
//task no 32

let current_users: string []= ["admin","eric","ali","hamza","fatima"]
 let new_users:string[]= ["admin","aliza","fatima","haseeb","Nnoor"]

let current_users_lower:string []= current_users.map(user => user.toLowerCase())

for (let new_user of new_users){
if( current_users_lower.includes(new_user.toLocaleLowerCase())) { 
 console.log(`sorry $(new_user),that time is taken`) 
} else  {
console.log(` yes $(new_user), is still in availaible list`)
   } }

//task no 33

let numbers: number [] = [1,2,3,4,5,6,7,8,9]
 
 for( let number of numbers){
 
  if ( number ===1){ 
    console.log(`${number}st`)
 
  } else if( number ===2){
     console.log(`${ number}nd`)
   }else if( number ===3){
     console.log(`${number}rd`)
   } else {
     console.log(`${ number}th`)
   }
 }
//task no 34
let favorite_pizza: string []=[ "pepperono"," chicken"," veg"]
 
for( let pizza of favorite_pizza){
  console.log(` i real like${ pizza},pizza`) }

//tsk no 35
let animals : string []=["cat","lion","dog"]

for (let animal of animals){
  console.log( animal)
}

console.log("\n")
for ( let animal of animals){
console.log(`A ${animal} has a tail`)
}
// task no 36

function makeShirts( size: string, text: string): void{
  console.log(`/n you order a ${size} shirt that says ${text}`)
}
makeShirt(`large`,`" i love typescript"`)
makeShirt(`medium`,`" i need a big shirt"`)

//task no 37
function makeShirt( size: string = 'large',text: string = 'i love typescript'): void{
  console.log(`you have order a ${size} shirt that says ${text}`)
}
 makeShirt()
makeShirt(`medium`)
//different message
makeShirt('snall','I need a big shirt to near')

//task no 38
 function describe_city( city: string, country: string ='Pakistan'): void{
  console.log(`${city} is in ${ country}`)
 }
 
describe_city('karachi')
describe_city('france', 'europe')
describe_city('lahore' , 'pakistan')

//task no 39

 function cityCountry( city: string, country: string): string{
  return`${city}, ${country}`
 }
  let c1 = cityCountry(`lahore`,`pakistan`)
  let c2 = cityCountry(`tokyo`,`japan`)
  let c3 = cityCountry(`paris`,`france`)

  console.log(c1)   
  console.log(c2)  
  console.log(c3)

//task no 40

function makeAlbum (artist: string, title: string): { artist: string; title: string }{
  const dictionries = { 
  artist: artist.charAt(0).toLocaleUpperCase( )+ artist.slice(1),
  title:title.charAt(0).toLocaleUpperCase()+ title.slice(1)
};
return dictionries;
}
let album = makeAlbum("ali","light")
console.log(album)

album = makeAlbum("bilal"," red wave")
console.log(album) 

album = makeAlbum("hamza"," seenbreez")
console.log(album) 

//task no 41

function show_magicians (magicians :string[]): void {
  for (const magician of magicians){

    console.log (magician.charAt(0).toUpperCase()+ magician.slice(1));
  }
}
const magician: string[]=["Ali","hamza","bilal"];
show_magicians(magician)

//task no 42

function make_great(magicians: string[]):void{
  for (let i = 0;  i < magicians.length; i++) {
   magicians[i]= magicians[i]   +  'the great'
  }
  }

 const magicians2: string[] = ["usman","haseeb","wajahat"];
 make_great(magicians2)
 show_magicians(magicians2)

 //task no 43

 function make_great2(magicians:string[]): string[] {
  const greatMagicians: string[]=[];
  for( let i = 0; i < magicians.length; i++){
    greatMagicians.push(magicians[1] + 'the great');
  }
  return greatMagicians;
 }
 const magicians3: string[] =["usman", "haseeb","wajahat"];
 const greatMagicians2:string[] =make_great2(magicians3);
 show_magicians(magicians3);
 show_magicians( greatMagicians2);


//task no 44

function sandwich(...items: string[]): void{
  console.log("Sandwich order;")
  for (let i = 0 ; i < items.length; i++){
    console.log(`-${items}[i]`)
  }
}
 console.log("enjoy your sandwich mishal nadeem")

 sandwich('capsicum','tomato','chicken')
 sandwich('beef','cheese')
 sandwich('garlic','chicken','mayo sauce')

 //task no 45
  type car ={
    manufacture:string
    model:string
    [key: string]:any;
  }
  function creatcar( manufacture:string, model:string,optional: Record<string, any>):car{
    return{
      manufacture,
      model,
      ...optional

    }
  }
  const mycar:car = creatcar("toyota","corolla",{color:"silver",year:"2024"})
   console.log(mycar)