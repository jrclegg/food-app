import axios from 'axios';

export default {
  data() {
    return {
      alerts: [],
      errors: []
    }
  },
  created() {
    axios.get(`https://data.food.gov.uk/food-alerts/id/FSA-AA-01-2018`)
    .then(response => {
      this.alerts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}