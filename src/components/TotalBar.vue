<template>
  <div class="balance">
    <h1>Account Balance  <strong>{{formatMoney(getTotal)}}</strong></h1>
  </div>
</template>
<script>
const mapGetters = require("vuex")["mapGetters"];

module.exports = {
  computed: {
    ...mapGetters(['getTotal']),
  },
};
</script>


