<template>
<div class="flex flex-col items-center">
  <h1>ewe</h1>
  <div v-for="(transaction,index) in getTransactions" v-bind:key=(index) class="transaction">
            <div class="flex">
                <div>{{ transaction.type }}</div>
                <div>{{ transaction.description.substring(0, 20) }}</div>
            </div>
            <div>{{ formatMoney(transaction.amount) }}</div>
        </div>
</div>

</template>
<script>
    const mapGetters = require('vuex')['mapGetters'];
    module.exports = {
      computed: {
        ...mapGetters([
          'getTransactions'
        ])
      }
    }
</script>