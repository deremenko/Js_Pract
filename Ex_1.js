// Решение через использование метода .sort
const sortElements = (arr, direction) => {
  switch (direction) {
      case '<': 
          arr.sort((a,b)=>{
              return a-b
          })
          break
      case '>':
         arr.sort((a,b)=>{
              return b-a
          })
          break
      default:
          console.log("error direction")
}
}
