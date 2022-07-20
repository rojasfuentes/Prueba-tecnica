
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

const nextBtn = document.querySelectorAll('.next')
const progressbar = document.querySelector("#progressbar li")
const fieldset = document.querySelectorAll("fieldset")
const prevBtn = document.querySelectorAll(".previous")
const submit = document.querySelector(".submit")
const stat = document.querySelectorAll(".stat")

let currentNav = 1
let currentFieldset = 0



for (let i = 0; i < nextBtn.length; i++) {
	const next = nextBtn[i];

	next.addEventListener('click', function () {
		currentNav++
		currentFieldset++

		if (currentNav > stat.length) {
			currentNav = 0
		}

		if (currentFieldset > fieldset.length-1) {
			currentFieldset = 0
		}

		update()
	})
}

for (let i = 0; i < prevBtn.length; i++) {
	const prev = prevBtn[i];

	prev.addEventListener('click', function () {
		currentNav--
		currentFieldset--

		if (currentNav <0) {
			currentNav = stat.length-1
		}

		if (currentFieldset < 0) {
			currentFieldset = fieldset.length-1
		}

		update()
	})
}





//Actualiza el estado de la progressbar y el fieldset m,ostrado 
function update() {
	stat.forEach((stat, idx) => {
		if (idx < currentNav) {
			stat.classList.add('active')
		} else {
			stat.classList.remove('active')
		}
	})



	fieldset.forEach((fset) => fset.classList.remove('current'))

	fieldset[currentFieldset].classList.add('current')

}

