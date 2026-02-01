async function getFPL() {
	try {
		const res = await fetch('https://fpl-backend-msoq6kfkr-ambitnanazwas-projects.vercel.app/api/fpl?teamId=8532146')

		if (!res.ok) throw new Error(`Backend zwrócił ${res.status}`)

		const data = await res.json()
		console.log(data)

		document.getElementById('teamName').textContent = data.teamName
		document.getElementById('manager').textContent = data.manager
		document.getElementById('totalPoints').textContent = data.totalPoints
		document.getElementById('currentEvent').textContent = data.currentEvent
	} catch (err) {
		console.error('Błąd pobierania danych:', err)
	}
}

getFPL()
