// Вариант через цикл
const cutStr = (str)=>{
   if (str.length>5) {
       return str.slice(0,3)+str.slice(-3)
   }else {
       let charStr = '';
       for (let i=0; i<str.length; i++) {
        charStr += str[0];
       }
       return charStr
    }
}

// Варианет через split
const cutStrs = (str)=>{
    if (str.length>5) {
        return str.slice(0,3)+str.slice(-3)
    }else {
        return str.split('').forEach((iten)=>{item=str[0]}).join('')
     }
 }