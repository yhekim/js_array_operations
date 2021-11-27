const array = ["Anakart", "Ram", "Ekran Kartı"];



var change = document.getElementById("change");
var addFirst = document.getElementsByClassName("push")[0];
var removeLast = document.getElementsByClassName("pop")[0];
var removeFirst = document.getElementsByClassName("unshift")[0];
var addLast = document.getElementsByClassName("shift")[0];
var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");



const display = () => {
    change.innerHTML = "";
    array.forEach((element, index) => {
        change.innerHTML += `<div class="alert alert-danger">${index+1}.Eleman : ${element}</div>`
    })
}

addFirst.addEventListener("click", () => {
    const addValue = value1.value;
    addValue ? array.push(addValue) : alert("Eklenecek veri yok")

    display();
    value1.value = "";
})
removeLast.addEventListener("click", () => {

    if (array.length > 0) {
        array.pop();
        display();
    } else {
        alert("Silinecek veri yok")
    }

})
addLast.addEventListener("click", () => {
    const addValue = value2.value;
    addValue ? array.unshift(addValue) : alert("Eklenecek veri yok")

    display();
    value2.value = "";
})
removeFirst.addEventListener("click", () => {

    if (array.length > 0) {
        array.shift();
        display();
    } else {
        alert("Silinecek veri yok")
    }

})

//---------------other operations

/* Uygulama 2 Kodları */

const veriler = ["Mehmet", "Ahmet", "Hasan", "Hüseyin", "Celal", "Amine"];

var sorted = document.getElementsByClassName("sorted")[0];
var section = document.getElementsByClassName("section")[0];
var concat = document.getElementsByClassName("concat")[0];
var operations = document.getElementsByClassName("operations")[0];
var listed = document.getElementsByClassName("listed")[0];


listed.addEventListener("click", () => {
    operations.innerHTML = "";
    veriler.forEach((element) => {
        operations.innerHTML += `<div class="alert alert-danger">${element}</div>`;
    });
})



// function aToZ(veriler){
//     return veriler.sort((x,y)=>{
//         return x-y;
//     })
// }
const display2 = (array) => {

    operations.innerHTML = "";
    array.forEach((element) => {
        operations.innerHTML += `<div class="alert alert-danger">${element}</div>`;
    });
}


sorted.addEventListener("click", () => {


    //console.log(aToZ(veriler));

    var sirala = veriler.sort();




    //A'dan Z'ye Sıralama
    //var sirala=veriler.sort().reverse();//Z'den A'ya Sıralama
    // var sirala=veriler.sort((y,x)=>{
    //     if (x < y) {
    //         return -1;
    //       }
    //       if (x > y) {
    //         return 1;
    //       }

    //       // names must be equal
    //       return 0;
    // });
    //console.log(sirala);
    display2(sirala)
});

section.addEventListener("click", () => {

    var section_add = veriler.slice(1, 2);

    display2(section_add)
});

concat.addEventListener("click", () => {

    var arrays = array.concat(veriler);
    operations.innerHTML = array.concat(veriler).join(" *");
    // console.log(arrays);
    display2(arrays)
})