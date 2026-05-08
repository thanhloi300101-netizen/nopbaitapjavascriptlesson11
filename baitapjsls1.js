let nam = Number(prompt("nhap nam can kiem tra ik ni"));
let lanamnhuan = false ;
if (nam % 4 === 0) {
    if (nam % 100 === 0) {
        if (nam % 400 === 0) {
lanamnhuan = true ;
        }
    } else {
        lanamnhuan = true ;
    }
}
if (lanamnhuan) {
    alert(nam + "la nam nhuan") ;
} else {
    alert(nam + "khong phai la nam nhua") ;
}