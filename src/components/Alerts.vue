
<template>
  <div v-if="alerts.items" id="app">
    <h2>{{ alerts.items[0].created }}</h2>
    <h2>{{ alerts.items[0].SMStext }}</h2>
    <p>{{ alerts.items[0].description }}</p>
    <p>{{ alerts.items[0].consumerAdvice }}</p>
    <ul>
      <li v-for="item in lists.items" :key="item.notation">
        {{ item.shortTitle }}
      </li>
    </ul>
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

