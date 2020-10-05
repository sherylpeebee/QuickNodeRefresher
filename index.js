const maths = require("./calcFunctions");

maths.add(1, 2, (out)=>{
console.log(out)
})

maths.misc((val)=>{
    val(4,5, function(res){
        console.log(res)
    })
})