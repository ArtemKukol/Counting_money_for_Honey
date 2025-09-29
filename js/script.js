document.addEventListener('DOMContentLoaded', () => {
	const counts = document.querySelectorAll('.count')
	const totalCells = document.querySelectorAll('.total')
	const totalSumElement = document.getElementById('total-sum')
	const controlSumInput = document.getElementById('control-sum')
	const deviationElement = document.getElementById('deviation')

	counts.forEach((count, index) => {
		count.addEventListener('input', () => {
			const nominal = parseFloat(
				count.parentElement.previousElementSibling.querySelector('input').value
			)
			const quantity = parseFloat(count.value)
			const total = nominal * quantity

			totalCells[index].textContent = total.toFixed(2)
			calculateTotalSum()
		})
	})

	controlSumInput.addEventListener('input', calculateDeviation)

	function calculateTotalSum() {
		let totalSum = 0
		totalCells.forEach(cell => {
			totalSum += parseFloat(cell.textContent)
		})
		totalSumElement.textContent = totalSum.toFixed(2)
		calculateDeviation()
	}

	function calculateDeviation() {
		const totalSum = parseFloat(totalSumElement.textContent)
		const controlSum = parseFloat(controlSumInput.value) || 0
		const deviation = totalSum - controlSum
		deviationElement.textContent = deviation.toFixed(2)
	}
})
