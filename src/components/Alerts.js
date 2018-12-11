
import axios from 'axios';

export default {
  data() {
    return {
      alert: [],
      lists: [],
      toggle: false,
      search: ""
    }
  },
  computed: {
    filteredLists: function(){
      return this.lists.filter((list) => {
        return list.item.title.match(this.search);
      });
    }
  },
  created() {
    axios.get(`https://data.food.gov.uk/food-alerts/id/FSA-AA-01-2018`)
    .then(response => {
      this.alert = response.data
    })
    .catch((error) => {
      console.log(error)
    })
    axios.get(`https://data.food.gov.uk/food-alerts/id?since=2018-11-24T16:10:00Z`)
    .then(response => {
      this.lists = response.data
    })
    .catch(function(error){
      console.log(error)
    })
  }
}



