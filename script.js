
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Pluto", "Junpita", "Venus", "Mars"," Mercury", "Uranus"],
      datasets: [{
        label: 'Planet',
        data: [10, 70, 30, 75, 25, 100],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  
                     