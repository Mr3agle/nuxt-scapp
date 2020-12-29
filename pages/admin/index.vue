<template>
  <div>
    <div class="row">
      <div v-for="(card, i) in dashCards" :key="i" class="col">
        <DashboardCard
          :title="card.title"
          :value="card.value"
          :image="card.image"
          :path="card.path"
        />
      </div>
    </div>

    <div class="row mt-5">
      <div class="col-6">
        <div class="chart-card">
          <bar-chart
            :data="barChartData"
            :options="chartOptions1"
            :height="200"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="chart-card">
          <line-chart
            :data="lineChartData"
            :options="chartOptions2"
            :height="200"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "~/components/BarChart";
import LineChart from "~/components/LineChart";
// import { Bar } from 'vue-chartjs'

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};

export default {
  layout: "admin",
  data() {
    return {
      lineChartData: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            backgroundColor: chartColors.blue,
            label: "Ingresos",
            data: [0, 310, 370, 620, 700],
          },
        ],
      },
      barChartData: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
        datasets: [
          {
            label: "Ingresos",
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [
              chartColors.red,
              chartColors.orange,
              chartColors.yellow,
              chartColors.green,
              chartColors.purple,
            ],
            data: [500, 1200, 800, 300, 200],
          },
        ],
      },
      chartOptions1: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Ingreso Mensual",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      chartOptions2: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: "Total Visitas",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
      dashCards: [
        {
          title: "Usuarios",
          value: 85,
          image: "https://www.flaticon.com/svg/static/icons/svg/921/921347.svg",
          path: "/admin/users",
        },
        {
          title: "Órdenes",
          value: 35,
          image:
            "https://www.flaticon.com/svg/static/icons/svg/3207/3207941.svg",
          path: "/admin/orders",
        },
        {
          title: "Productos",
          value: 52,
          image:
            "https://www.flaticon.com/svg/static/icons/svg/2898/2898378.svg",
          path: "/admin/products",
        },
        {
          title: "Comentarios",
          value: 78,
          image:
            "https://www.flaticon.com/svg/static/icons/svg/2190/2190510.svg",
          path: "/admin/comments",
        },
      ],
    };
  },
  components: {
    BarChart,
    LineChart,
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.lineChartData = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style lang="scss">
.chart-card {
  padding: 2rem;
  background: $white;
  border-radius: 2rem;
  border: 1px solid darken($pale, 5);
}
</style>
