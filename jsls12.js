let arr = [] ;
let chucai = "acbxyz";
for (let i = 0 ; i < 10 ; i++){
    let vitringaunhien = Math.floor(Math.random() * chucai.length);
    let kytungaunhien = chucai[vitringaunhien];
    arr.push(kytungaunhien);
}
console.log(arr);