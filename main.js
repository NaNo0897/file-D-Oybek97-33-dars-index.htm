// Shartli operatorlar yoki Taqqoslash operatorlari
// Haqiqat yoki yolg`onga tekshiramiz. Bu uchun taqqoslash poeratorlaridan foydalanamiz!


//condition
//user_age = +prompt('yoshingizni kiriting')
// alert() bu foydalanuvchiga ma`lumot beradigan modal oyna 

//if (user_age >= 18){
    //alert("Pasportingizni ko`rsating")


//}else if(user_age < 18 ){
   // alert('Maktabga bor!')

//}else{
    //alert("nimadur noto`g`ri")
//}
//switch (5+5){
    //case 26:
       // console.log('birinchi');
      //  break;
           // case 16:
        //console.log('ikkinchi');
        //break;
           // case 11:
        //console.log('uchunchi');
       // break;
       // case 10:
            //console.log('to`rtinchi');
       // break;
      // case 38:
      //      console.log('beshinchi');
      //  break;
      //  case 55:
      //      console.log('oltinchiinchi');
       //  break;
       //  default:
        //     console.log('hech biri emas');
        //     break;

         


//}
var login = 'oybek';
var pass = 1997;
var user_login = prompt('loginni kiriting')
var user_pass = prompt('parolni kiriting')
if (user_login == login && pass == user_pass) {
    alert('kirdingiz')
    var i = confirm('account egasimisiz?')
    if (i) {
        alert('Xush kelibsiz')
    }else{
        alert('bu account buzilgan')
    }
}else{
    alert(kirmadingiz)
}