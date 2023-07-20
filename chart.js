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
      scales: {
        // y: {
        //   beginAtZero: true
        // }
      }
    }
});

let chartHoras = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
        datasets: [{
          label: 'Horas de Treinamentos',
          data: [65,59,80,13,24,250,48,64,0,0,0,0,],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
    },
});