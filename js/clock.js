//kullanıcı ismini prompt ile alalım
let yourName = prompt("Merhaba. İsminizi giriniz");

//metni yazdırmak istediğimiz öğeyi id ile alalım
const myName = document.getElementById('myName');
myName.innerHTML= (yourName);


function showTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute= now.getMinutes();
    let second = now.getSeconds();
    const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

    const d = new Date();
    let day = weekday[d.getDay()];
    

    let dateNow = `${hour}:${minute}:${second} ${day}`
    return dateNow;
}

let time = document.getElementById('myClock');
time.innerHTML= (showTime())


