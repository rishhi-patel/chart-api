const express = require("express")
const app = express()
const port = 3000

// Data to be returned
const chartData = {
  lineChartData: {
    MathProgress: {
      labels: ["September", "October", "November", "December", "January"],
      scores: [75, 80, 65, 90, 75],
    },
  },
  barChartData: {
    ScienceExperiments: {
      labels: [
        "Experiment 1",
        "Experiment 2",
        "Experiment 3",
        "Experiment 4",
        "Experiment 5",
      ],
      scores: [80, 70, 90, 100, 85],
    },
  },
}

app.get("/chart-data", (req, res) => {
  res.json(chartData)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
