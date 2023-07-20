const ctx = document.getElementById('chartTreinamentos');
const ctx2 = document.getElementById('chartHoras');

let chartTreinamentos = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Válido', 'Vencido', 'Não realizado'],
      datasets: [{
        label: 'Treinamentos:',
        data: [12, 19, 3],
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
});

let chartHoras = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul",],
        datasets: [{
          label: 'Horas em Treinamentos',
          data: [4,8,3,2,6,10,2,],
          fill: false,
          borderColor: '#fdba74',
          tension: 0.1
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'top'
        }
      }
    }
});

// "Agosto","Setembro","Outubro","Novembro","Dezembro"
// 64,0,0,0,0,