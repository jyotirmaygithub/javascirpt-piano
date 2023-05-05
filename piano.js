// lets do it 

let piano_keys = document.querySelectorAll(".key")
let volume_selector = document.querySelector("#volume_control")
let box_selector = document.getElementById("box_control")

var audio_element = new Audio()

function just_play(choose) {
//--------<<here i used dollar for the functioning of this code>>------
    audio_element.src = `./tunes/${choose}.wav`
    audio_element.play()
    // console.log(audio_element)
   
    var full_element = document.querySelector(`[data-key = "${choose}"]`)
    // console.log(full_element)
//---------<<dollor>>-------

    full_element.classList.add("active")
    setTimeout(() => {
        full_element.classList.remove("active")
    }, 150);
}
function handling_volume(slider)  {
    console.log(slider)
    audio_element.volume = slider.target.value 
}
function keyboard_keys(press) {
    audio_element.src = `./tunes/${press.key}.wav`
    audio_element.play()   
}

//-------------all add event listeners are here --------//

Array.from(piano_keys).forEach((abc) => {
    abc.addEventListener("click", () => just_play(abc.dataset.key))
})
volume_selector.addEventListener("input", handling_volume) 

box_selector.addEventListener("click" , () => {
    piano_keys.forEach ((doing) => {
        doing.classList.toggle("hide")
    })
}) 
document.addEventListener("keydown",keyboard_keys)// lets make last function of this projects which will do the work of using keys of the keyboard to play the pinano without using mouse to click on the screen

//-----------end-------------//


//----------<<some point to get more information about the above used concepts>>--------------//

//the difference that lies between audio tag in html and the new audio object in js, it has a difference which is subtle one . They actually do the same thing. If you just want to include an audio inside your webpage, then using the html tag is seem fit and recommended. And If you would like the audio to play whilst there has been an interaction from the user, then the javascript Audio object is seem fit and recommended. so at last new audio object can create an audio element or tag


 // dollar is a kind of a operator which does not have predifined funtionality like arthicmetic operators
    // its use case vary from case to case, so next time i will be more catious in the taking of dollar, i will not take it as as operator which has some predifined work to do

//--------------ending concepts learning--------------//
