document.addEventListener('DOMContentLoaded', () => {
	const counts = document.querySelectorAll('.count');
	const totalCells = document.querySelectorAll('.total');
	const totalSumElement = document.getElementById('total-sum');
	const controlSumInput = document.getElementById('control-sum');
	const deviationElement = document.getElementById('deviation');

	counts.forEach((count, index) => {
		count.addEventListener('input', () => {
			const nominal = parseFloat(
				count.parentElement.previousElementSibling.querySelector('input').value
			);
			const quantity = parseFloat(count.value);
			const total = nominal * quantity;

			totalCells[index].textContent = formatNumber(total);
			calculateTotalSum();
		});
	});

	controlSumInput.addEventListener('input', calculateDeviation);

	function calculateTotalSum() {
		let totalSum = 0;
		totalCells.forEach(cell => {
			totalSum +=
				parseFloat(cell.textContent.replace(/\s/g, '').replace(',', '.')) || 0;
		});
		totalSumElement.textContent = formatNumber(totalSum);
		calculateDeviation();
	}

	function calculateDeviation() {
		const totalSum =
			parseFloat(
				totalSumElement.textContent.replace(/\s/g, '').replace(',', '.')
			) || 0;
		const controlSum = parseFloat(controlSumInput.value) || 0;
		const deviation = totalSum - controlSum;
		deviationElement.textContent = formatNumber(deviation);
	}

	function formatNumber(num) {
		return num.toLocaleString('ru-RU', {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	}
});
