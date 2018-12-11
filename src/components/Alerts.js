
import axios from 'axios';

export default {
  data() {
    return {
      // Single Alert 
      alert: [],
      // List of Alerts 
      lists: [],
      toggle: false,
      search: ""
    }
  },
  computed: {
    // Filter function to search through API responses
    filteredLists: function(){
      return this.lists.filter((list) => {
        return list.item.title.match(this.search);
      });
    }
  },
  created() {
    // Single Alert API request 
    axios.get(`https://data.food.gov.uk/food-alerts/id/FSA-AA-01-2018`)
    .then(response => {
      this.alert = response.data
    })
    .catch((error) => {
      console.log(error)
    })
    // List of Alerts API request
    axios.get(`https://data.food.gov.uk/food-alerts/id?since=2018-11-24T16:10:00Z`)
    .then(response => {
      this.lists = response.data
    })
    .catch(function(error){
      console.log(error)
    })
  }
}



