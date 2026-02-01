
// TEST
// async function getFPL() {
//     const res = await fetch('http://localhost:3001/api/fpl?teamId=8532146');
//     const data = await res.json();
//     console.log(data); // zobaczysz teamName, manager, totalPoints itd.
// }

// getFPL();


// PROD
async function getFPL() {
    const res = await fetch('https://fpl-backend-msoq6kfkr-ambitnanazwas-projects.vercel.app/api/fpl?teamId=8532146');
    const data = await res.json();
    console.log(data); // zobaczysz teamName, manager, totalPoints itd.
}

getFPL();