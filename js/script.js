let pics = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg']
pics = [...pics,...pics].sort(() => Math.random() - .5)

let arr = []
let count = 0
let items = document.querySelectorAll('td')

items.forEach((item,i) => {
    item.style.backgroundImage = `url(images/${pics[i]})`
    let overlay = document.createElement('div')
    item.appendChild(overlay)

    overlay.classList.add('overlay')
    overlay.setAttribute('onclick','flip(this)')
})


function flip(box){

    box.classList.add('show')
    let bg = box.parentElement.style.backgroundImage
    arr.push(bg)
    if(arr.length === 2){
        setTimeout(() => {
            if(arr[0] == arr[1]){
                items.forEach(e => {
                    if(e.style.backgroundImage === arr[0]){
                        e.style.opacity = 0
                    }
                })
                count++
                if(count == 6){
                    let next = confirm("next level?")
                    if(next){
                        location.reload()
                    }
                }
            }
                else{
                    items.forEach(e => e.firstElementChild.classList.remove('show'))
                }
                arr = []
        },1500)
    }
}