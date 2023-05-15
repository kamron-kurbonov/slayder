// const users = [
//     {id: "1", name: "kamron"},
//     {id: "2", name: "kamronbek"},
//     {id: "3", name: "kamronjon"} ,
// ]
// const res = users.reduce((acc, item) =>{
//     return {
//         ...item,
//         [item.id]: item.name,
//     }
// }, {})
// console.log(res)

// let result = [1, 2, 4, 5,'a', 3, 'f']
// function asdNumb(result){
//     for( let i = 0; i<=result.length; i++){
//         let v=result[i]
//         if(typeof v !== Number){
//             result = 0
//             break
//         }
//         console.log()
//         document.write()
//     }
//     const s = result.reduce(function(acc,item){
//         return acc*item;
//     },1)
//    return s
// }
// console.log(asdNumb(result));

// start slayder
const img = document.querySelector(".carusel__slayder");
const images = document.querySelectorAll(".carusel__slayder-item");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

let idx = 0;

function changeImg() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }
  img.style.transform = `translateX(${-idx * 400}px)`;
}
prevBtn.addEventListener("click", () => {
  idx++;
  changeImg();
});
nextBtn.addEventListener("click", () => {
  idx--;
  changeImg();
});

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key == "d") {
    idx++;
    changeImg();
  } else if (e.key == "a") {
    idx--;
    changeImg();
  }
});
