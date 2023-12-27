const button = document.querySelector('#button')
const left = document.querySelector('#left')

button.addEventListener("click" ,() => {
    const a = document.querySelector("#search").value
    const url = `https://poetrydb.org/lines,linecount,random/${a};14;1/lines,title,author.json`
    fetch(url).then(response => response.json())
    .then(data => {
        const right =  document.querySelector('#right')
        console.log(data)
        right.innerHTML = `<h1> ${data[0].title} </h1>`
        for(var i = 0 ; i < data[0].lines.length; i++){
            
            right.innerHTML = right.innerHTML +  `<p> ${data[0].lines[i]} </p>`
        }
        right.innerHTML = right.innerHTML + `<h6> By ${data[0].author} </h6>`
        const num = Math.floor(Math.random()*4)
        left.innerHTML = `<div id="cursor"></div>`
        if(num == 0){
            left.innerHTML = left.innerHTML+`<img src="0.png">`
        }else if(num == 1){
            left.innerHTML = left.innerHTML+`<img src="1.png">`
        }else if(num == 2){
            left.innerHTML = left.innerHTML+`<img src="2.png">`
        }else if(num == 3){
            left.innerHTML = left.innerHTML+`<img src="3.png">`
        }else{
            left.innerHTML = left.innerHTML+`<img src="1.png">`
        }
        gsap.from("img" , {
            opacity: 0,
            y: 100,
            duration: 1
        
        })

        gsap.from("#right" , {
            opacity: 0,
            y: 100,
            duration: 1
        
        })
        
       
    })
    .catch(() => {
        console.log("error")
    })

    

})

gsap.from("img" , {
    opacity: 0,
    y: 100,
    duration: 1

})
const timeline = gsap.timeline()
timeline.from("#Welcome" , {
    opacity: 0,
    y: 100,
    duration: 1

})

timeline.from("#text p" , {
    opacity: 0,
    y: 50,
    duration: 0.5

})

function cursor () {
    document.querySelector("#left").addEventListener("mouseenter" , () => {
        gsap.to("#cursor" , {
            opacity: 1,
            scale: 1,
            duration: 0.6
        })
    })
    
    document.querySelector("#left").addEventListener("mouseleave" , () => {
        gsap.to("#cursor" , {
            opacity: 0,
            scale: 0,
            duration: 0.6
        })
    })
    
    document.querySelector("#left").addEventListener("mousemove" , (e) => {
        gsap.to("#cursor" , {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            top: e.y ,
            left: e.x,
            translate: "-50% -100%"
            
        })
    })
}

cursor();


    






