
<template id="list-item">
<!-- Single Alert -->
  <div v-if="alert.items" id="app">
    <h2>{{ alert.items[0].SMStext }}</h2>
    <p>{{ alert.items[0].description }}</p>
    <p>{{ alert.items[0].consumerAdvice }}</p>
    <!-- Search Input -->
    <h4>Search Alerts</h4>
    <input class="searchInput" type="text" v-model="search" placeholder="search alerts" />
    <!-- List of Alerts -->
     <button class="showMoreButton" v-on:click="toggle = !toggle">
       Show/Hide More Allergy Information
     </button>
    <div v-for="item in lists.items" :item="item" :key="item.notation">
      <ul>
        <li class="alertList">
          {{ item.title }}
          <div v-show="toggle">
              <h4>{{item.productDetails[0].productName}}</h4>
              <p>{{item.problem[0].riskStatement}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script src="./Alerts.js"></script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.searchInput{
  width: 25%;
  padding: 5px;
  margin: 5px;
}
.showMoreButton {
  display: block;
  align-items: center;
  margin: auto;
  margin-top: 20px;

}
.alertList{
  list-style-type: none;
}
</style>

