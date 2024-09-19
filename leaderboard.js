// Generate fake data
const fakeData = [
    { rank: 1, name: 'Alice Johnson', score: 980 },
    { rank: 2, name: 'Bob Smith', score: 920 },
    { rank: 3, name: 'Charlie Brown', score: 890 },
    { rank: 4, name: 'Diana Prince', score: 860 },
    { rank: 5, name: 'Edward Norton', score: 830 },
    { rank: 6, name: 'Fiona Green', score: 800 },
    { rank: 7, name: 'George Martin', score: 780 },
    { rank: 8, name: 'Hannah Lee', score: 750 },
    { rank: 9, name: 'Ivy Thomas', score: 720 },
    { rank: 10, name: 'James Wilson', score: 700 }
];

// Populate the table with fake data
const tbody = document.querySelector('#leaderboard tbody');

fakeData.forEach(player => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${player.rank}</td>
        <td>${player.name}</td>
        <td>${player.score}</td>
    `;
    tbody.appendChild(row);
});