
import axios from 'axios';

export default {
  data() {
    return {
      alerts: [],
      errors: [],
      lists: [],
      listErrors: [],
      toggle: false
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
    axios.get(`https://data.food.gov.uk/food-alerts/id?_limit=10`)
    .then(response => {
      this.lists = response.data
    })
    .catch(e => {
      this.listErrors.push(e)
    })
  },
}
