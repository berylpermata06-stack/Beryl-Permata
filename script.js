// script.js

// Grafik dummy (Chart.js)
document.addEventListener("DOMContentLoaded", () => {
  const barCanvas = document.getElementById("barChart");
  if (barCanvas) {
    new Chart(barCanvas, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
        datasets: [{
          label: "Pemasukan (juta)",
          data: [10, 12, 8, 15, 9],
          backgroundColor: "#3b82f6"
        }]
      }
    });
  }

  const pieCanvas = document.getElementById("pieChart");
  if (pieCanvas) {
    new Chart(pieCanvas, {
      type: "pie",
      data: {
        labels: ["Operasional", "Perawatan", "Dana Cadangan"],
        datasets: [{
          data: [45, 30, 25],
          backgroundColor: ["#3b82f6", "#60a5fa", "#93c5fd"]
        }]
      }
    });
  }
});
