function setTitle(){
    let pageTitle = document.getElementById("title").innerHTML;
    document.getElementsByTagName("title")[0].innerHTML = pageTitle;
}
setTitle();

function warnahitam() {
    document.getElementById("demo").style.color="black";
}
function warnamerah() {
    document.getElementById("demo").style.color="red";
}
function notif() {
    window.alert("This is alert Example");
}


var x, y, z;  //this is  a commment
x= 5;       //variable x 
y= 6;
z= x + y;

function tambah() {
    document.getElementById("hasil").innerHTML="Hasil = " + z + "";
}
/*
This is a multi line
comment
*/

//id demo for output using variable
function demo_output1() {
    var carName = "Volvo";
    document.getElementById("demo3").innerHTML= carName;
}

//var can be many line, separated by comma
var var1="alpha",
var2="bravo",
var3="charlie",     //this is string
price=200;          //this is number

//example of global scope/ global variable
var variable_one, variable_two;


//example of local variable/ function scope
function funtion_2() {
    var function_scope;
    /*local variable/ funtion scope can only be accessed
    from inside this function*/
}

var varone=10;
//here varone is 10
{
    let varone=2;
    //here varone is 2
}
//here var one back to 10

function fungsi_tambah() {
    var x =10;
    var y =5;
    var x= x+y;
    document.getElementById("demoxy").innerHTML=x;
}

function mobill() {
    var mobil1=["toyota","honda","mitsubishi"];
    document.getElementById("demo7").innerHTML= mobil1[2];
    //document.write(5 + 6);
}

var cars=["toyota","mitsubishi","honda"];
document.getElementById("demo6").innerHTML = cars[0];
document.getElementById("demo10").innerHTML = cars;


//fungsi perkalian
var var4=4;
var var5=4;
var coba1=  fungsi1(var4, var5);
function fungsi1(a,b){
    return a*b;
}
document.getElementById("demo8").innerHTML= coba1;
document.getElementById("demo9").innerHTML= fungsi1;

var var6= "This is \"String\"";
document.getElementById("demo11").innerHTML= var6;

//string
var txt="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln=txt.length;
document.getElementById("demo12").innerHTML= sln;

var str="Please locate where 'Locate' Occurs!";
var pos=str.lastIndexOf("locate");
var pos2=str.search("where");
document.getElementById("demo13").innerHTML=pos;
document.getElementById("demo14").innerHTML=pos2;

//change string
var var7= "Perusahaan ini bernama scicord";
document.getElementById("demo15").innerHTML=var7;

function fungsi2() {
    var pos3=var7.replace("scicord","akademi");
    document.getElementById("demo15").innerHTML=pos3;
}

var var8="Apple, Banana, Kiwi";

function fungsi3() {
    var slice=var8.slice(7,13);
    var var9=slice.toLocaleUpperCase();
    document.getElementById("demo16").innerHTML=var9;
}

function fungsi14() {
    var var10="banana ";
    var10= var10.padStart(10,"*");
    document.getElementById("demo17").innerHTML=var10;
}
function fungsi15() {
    //var var11="password"
    var var11=document.getElementById("demo18").innerHTML;
    document.getElementById("demo21").innerHTML=var11;
    var var12=var11.length;
    var slice=var11.slice(5);
    slice = slice.padStart(var12,"*");
    document.getElementById("demo18").innerHTML= slice;
}
function fungsi19() {
    //get string from HMTL p, then split to array
    var ambil=document.getElementById("demo19").innerHTML;
    var arr=ambil.split(" "); //split by space character
    var var13=arr.length; //cek how many word
    //slice array then change the slice one to *
    var arr0=arr[0].length;
    var slice0=arr[0].slice(3);
    slice0= slice0.padStart(arr0,"*"); //chage 3 char in the start of word
    //array no2
    var arr1=arr[1].length;
    var slice1=arr[1].slice(3);
    slice1= slice1.padStart(arr1,"*");
    document.getElementById("demo20").innerHTML= ambil + " = " + slice0 + " " + slice1;
}
 var var14= 0.2 + 0.1;
 document.getElementById("demo22").innerHTML= var14;
 
var arr2=["satu","dua","tiga"];
document.getElementById("demo23").innerHTML=arr2;
document.getElementById("demo24").innerHTML= typeof arr2;

function fungsi20() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;
    let text = "<ul>";
    for (let i = 0; i < fLen; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo25").innerHTML = text;
}
function fungsi21() {
    const fruits = ["toyota", "mitsubishi", "honda"];
    let flen = fruits.length;
    let text = "<ul>";
    for (let i = 0; i < flen; i++) {
        text += "<li>" + fruits[i] + "</li>";
        console.log(text);
    }
    text += "</ul>";
    console.log(text);
    document.getElementById("demo25").innerHTML = text;
}
function fungsi26() {
    var arr3 = ["toyota","mitsubishi","honda","BMW","Audi","Mercedes","Hyundai"];
    arr3.pop();
    arr3.push("Ferrari");
    arr3.shift();
    arr3.unshift("Lamborgini");
    arr3[arr3.length]="toyota";
    document.getElementById("demo26").innerHTML = arr3.toString();
    arr3[0]="";
    var text = "<p>"
    for(var i=0; i<arr3.length; i++) {       
        text += "Arr[" + i + "] = "+ arr3[i] + "<br>";
    }
    text += "</p>";
    document.getElementById("demo27").innerHTML = text;
    console.log(text);
    //splice
    arr3.splice(0,1);
    document.getElementById("demo28").innerHTML = arr3.toString();
}
function fungsi29() {
    const arr2 = ["alpha","bravo","charlie"];
    const arr1 = ["delta","echo","foxtort"];
    const arr3 = ["golf","hotel","india"];
    const arr4 = arr1.concat(arr2,arr3);
    arr5 = arr4.concat("lima");
    document.getElementById("demo29").innerHTML = arr5;
    arr6 = arr5.slice(1,3);
    document.getElementById("demo30").innerHTML = arr6;
}
function fungsi30() {
    const arr2 = ["alpha","bravo","charlie"];
    const arr1 = ["delta","echo","foxtort"];
    const arr3 = ["golf","hotel","india"];
    const arr4 = arr1.concat(arr2,arr3);
    arr4.sort();
    arr4.reverse();
    document.getElementById("demo31").innerHTML = arr4;
}
function fungsi31() {
    const arr6= [1,2,100,11,25,50,53];
    console.log(arr6);
    arr6.sort(function(a,b){return a-b});
    console.log(arr6);
    document.getElementById("demo32").innerHTML = arr6;
    console.log(arr6);
}

const carsx= [
    {type:"alpha", year:2016},
    {type:"charlie", year:2001},
    {type:"beta", year:2010}
]
displaycars();

function fungsi33() {
    carsx.sort(function(a,b){
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x<y) {return -1};
        if (x>y) {return 1};
        return 0;
    });
    displaycars();
    console.log(carsx);
}
function fungsi34() {
    carsx.sort(function(a,b) {return a.year-b.year});
    displaycars();
}

function displaycars() {
    document.getElementById("demo33").innerHTML =
    carsx[0].type + " " + carsx[0].year + "<br>" +
    carsx[1].type + " " + carsx[1].year + "<br>" +
    carsx[2].type + " " + carsx[2].year + "<br>";
}

function fungsi35() {
    var arr=[34,3,2,6,7,4,32,5,7,7,83,9,569,0,456,4,9,1,2,3,4,5];
    document.getElementById("demo351").innerHTML= arr;
    arr.sort(function(a,b){return a-b});
    var txt="";
    arr.forEach(fungsi1); //panggil fungsi forEach
    document.getElementById("demo35").innerHTML = txt; //tampilkan 
    function fungsi1(value, index, array) {
        txt += value + "|";
    }
}

function fungsi36() {
    var arr0=[34,3,2,6,7,4,32,5,7,7,83,9,0,456,4,9,1,2,3,4];
    var arr1= arr0.map(fungsi0);
    document.getElementById("demo360").innerHTML = arr0;
    document.getElementById("demo361").innerHTML = arr1;
    function fungsi0(value, index, array) {
        return value*2;
    }
}
function function37() {
    var arr0=[34,3,2,6,7,4,32,5,7,7,83,9,0,456,4,9,1,2,3,4];
    var arr1= arr0.filter(function0);
    document.getElementById("demo370").innerHTML = arr0;
    document.getElementById("demo371").innerHTML = arr1;

    function function0(value, index, array) {
        return value > 7;
    }
}
function function38() {
    var arr0=[34,3,2,6,7,4,32,5,7,7,83,9,0,456,4,9,1,2,3,4];
    var arr1= arr0.reduce(function0);
    document.getElementById("demo380").innerHTML = arr0;
    document.getElementById("demo381").innerHTML = arr1;

    function function0(total, value, index, array) {
        return total + value;
    } 
}
function function39() {
    const const1= Date();
    document.getElementById("demo390").innerHTML = const1;
}
function function40() {
    const const1=Math.PI;
    var var1 = Math.round(const1);
    var var2 = Math.ceil(const1);
    var var3 = Math.floor(const1);
    document.getElementById("demo400").innerHTML = const1;
    document.getElementById("demo401").innerHTML = var1;
    document.getElementById("demo402").innerHTML = var2;
    document.getElementById("demo403").innerHTML = var3;
    document.getElementById("demo404").innerHTML = "trunc " + Math.trunc(const1);
}
function function41() {
    var arr0= [0];
    for (var i=0; i<100; i++) {
        arr0[i]=Math.floor(Math.random()*100);
    }
    document.getElementById("demo410").innerHTML = arr0;
    var arr1 = arr0.sort(function(a,b){return a-b});
    var txt ="";
    var bool ="";
    arr1.forEach(function1);
    document.getElementById("demo411").innerHTML = txt;
    document.getElementById("demo412").innerHTML = bool;
    function function1(value, index, array) {
        txt += value + "|";
        bool += Boolean(value>50) + "|";
    }
}
function function42() {
    var day;
    switch (new Date().getDay()) {
        case 0:
            day = "sunday";
            break;
        case 1:
            day = "monday";
            break;
        case 3:
            day = "tuesday";
            break;
        case 4:
            day = "wednesday";
            break;
        case 4:
            day = "thursday";
            break;
        case 5:
            day = "friday";
            break;
        case 6:
            day = "saturday";
            break;
        default:
            day = "there is something wrong with your programm";
    }
    document.getElementById("demo420").innerHTML = day;
    document.getElementById("demo421").innerHTML = new Date().getDay();
}
function function43() {
    const arr0 = ["banana","mango","orange"];
    var txt0 = "";
    var txt1 = "";
    for (x of arr0) {
        txt0 += x + "-";
        console.log(x);
    }
    for (x in arr0) {
        txt1 += x + "-";
        console.log(x);
    }
    document.getElementById("demo430").innerHTML = txt0;
    document.getElementById("demo431").innerHTML = txt1;
}
function function440() {
    var var440 = 0;
    while ( var440 < 10) {
        var440++;
    }
    document.getElementById("demo440").innerHTML = var440;
}
function function441() {
    var var441 = 0;
    do {
        var441++;
    }
    while (var441<10);
    document.getElementById("demo441").innerHTML = var441;
}
function function45() {
    const date = new Date();
    document.getElementById("demo450").innerHTML = function0(date);
    function function0(date) {
        return date.constructor === Date;
    }
}
function function46() {
    var var460 =  String(Date());
    document.getElementById("demo460").innerHTML = var460;
    var var461 = Number("47");
    document.getElementById("demo461").innerHTML = var461;
    document.getElementById("demo462").innerHTML = typeof(var460);
}
function function47() {
    try {
        document.getdfdElementById("demo471").innerHTML = "Hello";
    }
    catch(err) {
        document.getElementById("demo470").innerHTML = err.message;
    }
}
function function48() {
    var var480, var481;
    var480 = document.getElementById("demo480");
    var480.innerHTML = "";
    var481 = document.getElementById("input480").value;
    try {
        if (var481 < 6 && var481 > 0) throw "baby";
        if (var481 > 5 && var481 < 19) throw "teenager";
        if (var481 >18 && var481 < 60) throw "adult"
        if (var481 > 59 && var481 < 101) throw "old"
        if (var481 > 100) throw "immortal"
        else throw "Stupid, Input Positif Number Only"
    }
    catch (err) {
        var480.innerHTML = "You are " + err;
    }
    finally {
        document.getElementById("input480").value = "";
    }
}
function function49() {
    var obj = {fname:"", lname:"", age:""};
    obj.fname = document.getElementById("demo490").value;
    obj.lname = document.getElementById("demo491").value;
    obj.age = document.getElementById("demo492").value;
    document.getElementById("demo493").innerHTML = obj.fname + " " + obj.lname + ", " + obj.age + " years old";
    document.getElementById("demo490").value = "";
    document.getElementById("demo491").value = "";
    document.getElementById("demo492").value = "";
}
function function50() {
    var var500 = function(var501) {
        return "Hello World!" + var501;
    }
    document.getElementById("demo500").innerHTML = var500("and Universe");
}
function function51() {
    class car {
        constructor (name, year) {
            this.name = name;
            this.year = year;
        }
    }
    const myCar = new car("avanza", 2021);
    let myCar0 = new car("toyota rush", 2022);
    let myCar1 = new car("BMW S class", 2025);
    document.getElementById("demo510").innerHTML = myCar.name + ", " + myCar.year;
    document.getElementById("demo511").innerHTML = myCar0.name + ", " + myCar0.year;
    document.getElementById("demo512").innerHTML = myCar1.name + ", " + myCar1.year;
}
function function52() {
    class car {
        constructor (name, year) {
            this.name = name;
            this.year = year;
        }
        age(x) {
            return x-this.year;
        }
    }
    var var520 = new Date().getFullYear();
    let car000 = new car("Avanza", 2021);
    var age = var520 - car000.year;
    let car001 = new car("Rush", 2022);
    let car002 = new car("BMW S Class", 2025);
    document.getElementById("demo520").innerHTML = "My " + car000.name + " is " + car000.age(var520) + " years old.";
}
function function53() {
    var json530 = '{"employees" : ['+
    '{"firstname":"John","lastname":"Doe"},'+
    '{"firstname":"Anna","lastname":"Smith"},'+
    '{"firstname":"Peter","lastname":"Jones"}]}';
    var obj531 = JSON.parse(json530);
    console.log(obj531.employees.length);
    var txt532 = "";
    for (var i=0; i<obj531.employees.length; i++) {
        txt532 += obj531.employees[i].firstname + " " + obj531.employees[i].lastname + "<br>";
    }
    document.getElementById("demo530").innerHTML = txt532;
}
// global variabel = g_i;
// local variabel = first_name; last_name; price; something;

function function54() {
    var time = new Date();
    var nama_bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    var bulan = nama_bulan[time.getMonth()];
    // gabungkan
    var menit = menit();
    function menit() {
        var x = time.getMinutes();
        if (x<10) {
            return "0" + time.getMinutes();
        }
    }
    var tanggal_sekarang = time.getDate() + " " + bulan + " " + time.getFullYear() + ", " + time.getHours() + ":" + menit + " GMT+" + time.getTimezoneOffset()/-60;
    // tampilkan
    document.getElementById("demo540").innerHTML = time;
    document.getElementById("demo541").innerHTML = tanggal_sekarang;
}
function function55() {
    var person = {
        firstname: "Tomson",
        lastname: "Panagua",
        languange: "NO",
        get fullName() {
            return this.firstname + " " + this.lastname;
        },
        get lang() {
            return this.languange;
        },
        set lang(value) {
            this.languange = value;
            this.languange = value.toUpperCase();
        }
    }
    document.getElementById("demo550").innerHTML = person.fullName;
    person.lang = "en";
    document.getElementById("demo551").innerHTML = person.lang;
}
function function56() {
    var person = {
        firstname: "Tomson",
        lastname: "Panagua",
        languange: "default",
        number: 1
    };
    Object.defineProperty(person, "languange", {
        get : function() {return languange},
        set : function(value) {languange = value}
    });
    person.languange="en";
    document.getElementById("demo560").innerHTML = person.languange;
    person.number = 2;
    document.getElementById("demo561").innerHTML = person.number;
}
function function57() {
    var txt = "Hello World!";
    async function disp() {
        let prom = new Promise (function(mssg,tme) {
            setTimeout(function() { mssg(txt);}, 3000);
        });
        document.getElementById("demo571").innerHTML = await prom;
    }
    disp();
    clearTimeout(prom);

    var i=0;
}
function function58() {
    const person = {
        firstName : "Tomson",
        lastName : "Panagua",
        age : 26,
        car : {
            car1 : "Mitsubishi Xpander",
            car2 : "BMW S Class"
        }
    };
    var txt= "";
    for (let x in person) {
        txt += person[x] + " ";
    }
    person.nationality = "Indonesia";
    txt += person.nationality;
    document.getElementById("demo580").innerHTML = txt;

    delete person["age"];
    let c1 = "car1";
    document.getElementById("demo581").innerHTML = person.firstName + " " + person.age + " Using " + person.car[c1] ;
}
var g_cek = 0;
function function59() {
    const person = {
        name : "Tomson",
        age : 27,
        car : [
            {name : "ford", model : ["fiesta", "focus", "mustang"]},
            {name : "BMW", model : ["320", "X3", "X5"]},
            {name : "Fiat", model : ["500", "Fanda"]}
        ]
    }
    var txt = "";
    for (let i in person.car)  {
        txt += "<h2>" + person.car[i].name + "</h2>";
        for (let j in person.car[i].model) {
            txt += person.car[i].model[j] + "<br>";
        }
    }
    var cek = document.getElementById("demo590").innerHTML;
    
    if (g_cek == 1) {
        document.getElementById("demo591").innerHTML = "EMPTY";
        g_cek = 0;
        //cek = 0;
        //document.getElementById("demo590").innerHTML = cek;
    }
    else {
        document.getElementById("demo591").innerHTML = txt;
        g_cek =1;
        //cek = 1;
        //document.getElementById("demo590").innerHTML = cek;
    }
    console.log(g_cek);
}
function function60() {
    let jk = 991;
    console.log(jk);
    function600();
    function function600() {
        jk = 1;
        console.log(jk);
        for (let k=1; k==1; k--) {
            console.log(jk);
        }
    }
    for (let j=1; j==1; j--) {
        console.log(jk);
    }
}
function function61() {
    const person = {
        name : "tomson",
        age : 26,
        country : "Indonesia"
    }
    document.getElementById("demo610").innerHTML = Object.values(person);
}
function function62() {
    const person = {
        name : "tomson",
        age : function() {return 26;},
        country : "Indonesia"
    };
    person.age = person.age.toString();
    document.getElementById("demo620").innerHTML = JSON.stringify(person);
}
function function63() {
    const obj = {counter: 0};

    //object method to define setter and getter
    Object.defineProperty(obj, "reset", {get : function() {this.counter=0;}});
    Object.defineProperty(obj, "increment", {get : function() {this.counter++;}});
    Object.defineProperty(obj, "decrement", {get : function() {this.counter--;}});
    Object.defineProperty(obj, "add", {set : function(value) {
        this.counter += value;
    }});
    Object.defineProperty(obj, "subtract", {set : function(value) {this.counter -= value;}});

    //call object method to change property value
    obj.reset;
    obj.add = 5;
    obj.subtract = 1;
    obj.increment;
    obj.decrement;
    document.getElementById("demo630").innerHTML = obj.counter;
}
function function64() {
    //constructor
    function Person (fname, lname, age, country) {
        this.firstname = fname;
        this.lastname = lname;
        this.age = age;
        this.counttry = country;
        this.fullname = function() {
            return this.firstname + " " + this.lastname;
        }
    }
    const me = new Person ("Tomson", "Panagua", 26, "Indonesia");
    const her = new Person ("Careline", "Smith", 24, "Swiss");
    document.getElementById("demo640").innerHTML = Object.values(me) + " & " + Object.values(her);
    document.getElementById("demo641").innerHTML = me.fullname() + " & " + her.fullname();
}
function function65() {
    const person = {
        fullName : function() {
            return this.fname + " " + this.lname;
        }
    }
    const person0 = {
        fname : "tomson",
        lname : "panagua"
    }
    document.getElementById("demo650").innerHTML = person.fullName.call(person0);
    document.getElementById("demo651").innerHTML = person.fullName.apply(person0);
}
const add = (function(){
    let counter = 0;
    return function(){
        counter +=1; return counter;
    }})();

function function66() {
    document.getElementById("demo660").innerHTML = add();
}
function function67() {
    function display(value) {
        document.getElementById("demo670").innerHTML = value;
    }
    function add(var1, var2, callback) {
        let adding = var1 + var2;
        callback(adding);
    }
    add(5, 5, display);
}
function function68() {
    let second = 10;
    let stop = 0;
    function display(){
        if (stop != 1) {
            document.getElementById("demo680").innerHTML = second;
            second --;
            setTimeout(display,1000);
            if (second== -1) {
                stop = 1;
            }
        }
    }
    display();
}
setInterval(function69,1000);
function function69() {
    let time = new Date();
    let second = time.getSeconds();
    let minute = time.getMinutes();
    let hour = time.getHours();
    if (second < 10) {second = "0" + second};
    if (minute < 10) {minute = "0" + minute};
    if (hour < 10) {hour = "0" + hour};
    document.getElementById("demo690").innerHTML = 
    hour + ":" + minute + ":" + second;
} 
var cekload= 1;
function function70() {
    if (cekload==1) {
        let width = 1;
        let tampil = document.getElementById("load2");
        if (cekload==1){
            setInterval(disp,10);
            function disp() {
                cekload=0;
                if (width < 100) {
                    width += 0.1;
                    tampil.style.width = width + "%";
                    tampil.innerHTML = Math.floor(width) + "%";
                }
                else {
                    clearInterval(disp);
                    cekload=1;
                }
            }
        }
        document.getElementById("load2").style.color = "white";
    }
    else {
        alert("Please Wait Loading Until 100%");
    }
}
function function71(obj) {
    obj.innerHTML = "Mouse Hover";
}
function function72(obj) {
    obj.innerHTML = "Mouse Out";
}
function function73(obj) {
    obj.innerHTML = "Mouse Down";
    obj.style.backgroundColor = "red";
    document.getElementById("demo730").innerHTML = Date();
}
function function74(obj) {
    obj.innerHTML = "Mouse Up";
    obj.style.backgroundColor = "blue";
    document.getElementById("demo730").innerHTML = "";
}
document.getElementById("myDIV").addEventListener("mousemove", moveMouse);
function moveMouse() {
    document.getElementById("demo750").innerHTML = Math.random();
}
function function75() {
    document.getElementById("myDIV").removeEventListener("mousemove", moveMouse);
}
function function76() {
    const parent = document.createElement("p");
    const child = document.createTextNode("this is the second child");
    parent.appendChild(child);
    const element = document.getElementById("demo760");
    element.appendChild(parent);
}
function function77() {
    //remove element
    document.getElementById("removethis").remove();
}
function function78() {
    window.close();
}
function function79() {
    history.back();
}
function function80() {
    history.forward();
}

function function81() {
    var result = bowser.getParser(window.navigator.userAgent);
    let txt = result.parsedResult.browser.name + " " + result.parsedResult.browser.version + " " + result.parsedResult.os.name + " " + result.parsedResult.os.versionName;
    console.log(result.parsedResult.browser.name);
    console.log(result.parsedResult.browser.version);
    console.log(result.parsedResult.os.name);
    console.log(result.parsedResult.os.versionName);
    document.getElementById("demo810").innerHTML = txt;
}
function function82() {
    let txt;
    if (confirm("Press a button :")) {
        txt = "You press OK button";
    }
    else {
        txt = "You press Cancel Button";
    }
    document.getElementById("demo820").innerHTML = txt;
}
function function83() {
    let txt;
    let person = prompt("Please enter your NAME :");
    if (person == null || person == "") {
        txt = "User canceled the prompt";
    }
    else {
        txt = "Your name is : " + person + ", Welcome to our website"; 
    }
    document.getElementById("demo830").innerHTML = txt;
}
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("welcome again " + user);
    }
    else {
        user = prompt("Please enter your name: ","");
        if (user != "" && user != null) {
            setCookie("username", user, 30);
        }
        console.log(user);
    }
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function deleteCookie() {
    document.cookie="username=;expires=Thu, 01 Jan 1970";
    alert("Cookie deleted");
}
function displayCookies() {
    console.log("displayCookies");
    var fname=getCookie("username");
    if (fname==null) {
        fname="";
    }
    if (fname!="") {
        fname="username="+fname;
    }
    alert (fname);
}
function function85() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("demo850").innerHTML = this.responseText;
    }
    xhttp.open("GET","index.html");
    xhttp.send();
}
function close85(){
    document.getElementById("demo850").textContent = "closed";
}

//Loading XML File and select by tagName
function function86() {
    const xhttp = new  XMLHttpRequest();
    xhttp.onload = function() {
        load86(this);
    }
    xhttp.open("GET","/xml/cs_catalog.xml");
    xhttp.send();
}
function load86(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("CD");
    let table = "<tr><th>Artist</th><th>Title</th></tr>";
    for (let i=0; i < x.length; i++) {
        table += "<tr><td>" +
        x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue + "</td><td>" +
        x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue + "</td></tr>";
    }
    document.getElementById("table860").innerHTML = table;
    console.log(table);
}
function function87() {
    $(document).ready(function() {
        let myElements = $("#demo87a");
        $("#demo87b").text(myElements[0].innerHTML);
    });
}
function function87a() {
    $(document).ready(function() {
        let myElements = $("p");
        $("#demo87d").text(myElements[2].innerHTML);
        console.log(myElements[2]);
    });
}
function function88(){
    $(document).ready(function() {
        let myText = $("#demo880").text();
        $("#demo881").text(myText);
    });
}
function function89() {
    $("#demo89a").html("<p>This is &ltp></p>");
}
function function90() {
    localStorage.setItem("name","Tomson Panagua");
    document.getElementById("demo90a").textContent = localStorage.getItem("name");
}
function function91() {
    if (typeof(w) == "undefined") {
        w  = new Worker("/js/demo_worker.js");
    }
    w.onmessage = function(event) {
        document.getElementById("demo91a").innerHTML = event.data;
    };
}
function function91a() {
    w.terminate();
    w = undefined;
}