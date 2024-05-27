// let num = 41;
// console.log(num**5%3);

// let  name = "Nurlan";
// let surname = "Mahmudov";
// console.log(`your name ${name} ${surname} glaad see to!`);

// let fullName = "Nurlan Mahmudov";
// console.log(fullName.length - 1);

// let fullName = "Nurlan Mahmudov";
// console.log(fullName[0] + fullName[7]);

// let a = +prompt("eded daxil et");
// let b = +prompt("eded daxil edin");
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

//1219

// let a = 12345;
// let b = 98765;
// let c = parseInt(a*b/10000)%10
// console.log(c);

// let a = +prompt("Bir eded daxil edin");
// if(a%2==1){
//     console.log("Tek ededdir");
// }else{
//     console.log("Cut ededdir");
// }

// let x = +prompt("1ci eded");
// let y = +prompt("2ci eded");

// if(x%y==0){
//     alert("YES");
// }else{
//     alert("NOO")
// }

// let a = +prompt("1ci eded");
// let b = +prompt("2ci eded");

// if(a<b){
//     alert(a);
// }else{
//     alert(b)
// }

// let a = prompt("5 reqemli eded  daxil edin");

// let b = prompt("5 reqemli eded daxil edin");
// let besinci = b%10
// let dorduncu = parseInt(b/10)%10;
// let ikinci = parseInt(b/1000)%10;
// let birinci = parseInt(b/10000)

// if(birinci == besinci && ikinci == dorduncu){
//     alert("Palidrom ededdir");
// }else{
//     alert("palidrom eded deyil");
// }

// if(a[0] == a[4] && a[1] == a[3]){
//     alert('Alpidrom ededdir')
// }else{
//     alert("Alpidrom eded deyil")
// }

// let a = prompt("1-7 arasi bir eded daxil edin");

// switch (a) {
//   case "1":
//     alert("bazar ertesi");
//     break;
//   case "2":
//     alert("cersenbe axsami");
//     break;
//   case "3":
//     alert("cersenbe");
//     break;
//   case "4":
//     alert("cume axsami");
//     break;
//   case "5":
//     alert("cume");
//     break;
//   case "6":
//     alert("senbe");
//     break;
//   case "7":
//     alert("bazar");
// }





// let a = +prompt("eded daxil et");
// let star = ''
// for (let i = a; i>0 ; i--){
//     star += '*'
// }
// console.log(star);


// debugger;



// let a = +prompt("esas ededi daxil edin");
// let b = +prompt("quvveti daxil edin");
// let c = 1;
// for(let i = b ; i>=1 ; i--){
//     c = a*c;
//     console.log(c);
// }




// let a = +prompt("baslangic deyer");
// let b = +prompt("Son deyer");
// let c = 0;
// let d = 1;
// for(let i = a ; i<b ; i++){
//     if(i%2==0){
//         c+=i
//     }else{
//         d*=i
//     }
// }
// console.log(c , d);


// let a = 56;
// console.log(a**5);
// console.log(a%3);



// let firstName = "Nurlan";
// let lastName = "Mahmudov";

// console.log("Your name is " + firstName , lastName);



// let fullName = "Nurlan Mahmudov";
// console.log(fullName.length - 1);




// let fullName = "Nurlan Mahmudov";
// console.log(fullName[0] ,fullName[7] );




// let a = +prompt("birinci ededi daxil edin");
// let b = +prompt("ikinci ededi daxil edin");

// console.log(a*b);
// console.log(a/b);
// console.log(a+b);
// console.log(a-b);





// let a = 12345;
// let b = 98765;
// let c = a*b;
// console.log(parseInt(c/10000)%10);




 
// let a = +prompt("4 reqemli eded daxil edin");

// let el1=parseInt(a/1000);
// let el2=parseInt(a/100)%10;
// let el3=parseInt(a/10)%10;
// let el4=a%10;

// console.log(el1 + el2 + el3 + el4);




// let a = +prompt("bir eded daxil edin");

// if(a<50 && a>=1){
//     console.log("1-50 araligindadir");
// }else{
//     console.log("1-50 araliginda deyil");
// }




// let x = +prompt("birinci ededi daxil edin");
// let y = +prompt("ikinci ededi daxil edin");

// if(x%y == 0){
//     alert("YES");
// }else{
//     alert("NOO");
// }


// let a = +prompt("bir eded daxil edin");

// if(a%2==0){
//     alert("cut ededdir");
// }else{
//     alert("tek ededdir");
// }



// let a =6;

// let metn = "";

// for(let i = 0 ; i<a ; i++){
//     for(let j = 0; j<a ; j++){
//         if(j==0 || i == 0){
//             metn+="*";
//         }else if(j==a-1 || i ==a-1){
//             metn+="*";
//         }else{
//             metn+=" "
//         }
      
//     }
//     metn += '\n'
// }
// console.log(metn);



// let a = +prompt("bir eded daxil edin");
// let b = 0;
// for(let i = 1 ; i < a ; i++){
//     if(a%i==0){
//         b+=i;
//     }
// }
// if(a==b){
//     console.log("mukemmel ededdir");
// }else{
//     console.log("mukemmel eded deyil");
// }
// console.log(b);


// let cem = 0;
// for(let i = 1 ; i <=100 ; i++){
//     cem = 0;
//     for (let j = 1; j < i; j++) {
//         if(i%j==0){
//             cem+=j
//         } 
//     }
//     if(cem==i){
//         console.log(i ,  "eded mukemmeldir");
//     }else{
//         console.log(i , "eded mukemmel deyil");
//     }
// }

// code war , e-olimp 

// let eded = prompt("bir eded daxil edin");
// let cem = 0;
// for(let i = 0 ; i <eded.length ; i++){
//     let reqem = eded[i];
//     cem+=reqem**eded.length
// }
// if(Number(eded==cem)){
//     alert("eded armstrongdur")
// }else{
//     alert("armstrong deyil");
// }
