const buttons = document.querySelectorAll('.button')
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

const btn = document.querySelector('#sign-up')
const closeBtn = document.querySelector('.close-btn')
const popup = document.querySelector('.popup')
let button

btn.addEventListener('click', function() {
    popup.classList.toggle("active");

})
closeBtn.addEventListener('click', function() {
popup.classList.remove("active");
})


buttons.forEach(el => el.addEventListener('click', clicked)) 

function clicked(e) {
if (e.target != e.currentTarget)
     button = e.target
     button.classList.add('active')
setTimeout(remove, 1500)

}

function remove(){
    button.classList.remove('active')
  }


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute("data-theme", "light")
    } else {
        document.documentElement.setAttribute("data-theme", "dark")
    }
}

toggleSwitch.addEventListener('change', switchTheme, false)