
<template id="list-item">
  <div v-if="alerts.items" id="app">
    <h2>{{ alerts.items[0].created }}</h2>
    <h2>{{ alerts.items[0].SMStext }}</h2>
    <p>{{ alerts.items[0].description }}</p>
    <p>{{ alerts.items[0].consumerAdvice }}</p>
    <div v-for="item in lists.items" :key="item.notation">
      <ul>
        <li>
          {{ item.title }}
          <button v-on:click="toggle = !toggle">
            Show More
          </button>
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
</style>

