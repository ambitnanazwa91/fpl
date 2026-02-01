async function getFPL() {
    const res = await fetch('https://fpl-backend-msoq6kfkr-ambitnanazwas-projects.vercel.app/api/fpl?teamId=8532146');
    const data = await res.json();
    console.log(data); // teamName, manager, totalPoints, currentEvent
}

getFPL();