
<template>
  <div v-if="alerts.items">
    <h2>{{ alerts.items[0].created}}</h2>
    <h2>{{ alerts.items[0].SMStext}}</h2>
    <p>{{ alerts.items[0].description}}</p>
    <p>{{ alerts.items[0].consumerAdvice}}</p>
  </div>
</template>


<script src="./Alerts.js"></script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
