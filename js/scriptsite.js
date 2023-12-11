

document.addEventListener('DOMContentLoaded', function () {
	const slider = document.getElementById('slider')
	const resultElement = document.getElementById('result')
	const valueElement = document.getElementById('value')

	let value = 200

	function updateResult() {
		const sliderValue = parseInt(slider.value, 10)
		const result = sliderValue === 206 ? 'Правильно' : 'Двигай Ползунок'
		resultElement.textContent = result
		valueElement.textContent = `Рост Джеймса: ${value}`
	}

	slider.addEventListener('input', function () {
		value = parseInt(slider.value, 10)
		updateResult()
	})

	updateResult()
})
