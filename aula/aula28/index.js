// const cursos = ['html', 'css', 'js', 'ph', 'react']

// var c = cursos.map((el, i) => {
//     return el
//     })

//     console.log(c)



// var el = document.getElementsByTagName("div")

// el = [...el]
// el.map((e, i) => {
    //     e.innerHTML = `CURSINHOS`
    // })



// const el = document.getElementsByTagName('div')
// const val = Array.prototype.map.call(el,({innerHTML}) => innerHTML)
// console.log(val)


const convertInt = (e) => parseInt(e)
const mult = (e) => e*10
var num = ['1', '2', '3', '4', '5'].map(mult)
console.log(num)