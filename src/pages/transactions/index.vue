<template>
  <div class="flex flex-col items-center">
    <h1>My Transactions</h1>
    <div
      v-for="(transaction, index) in getTransactions"
      v-bind:key="index"
      class="transaction"
    >
      <div class="flex">
        <div class="w-10">
          <plus-sign v-if='transaction.type ==="credit"' class="text-green-600"></plus-sign>
          <minus-sign v-else class="text-red-600"></minus-sign>
        </div>
        <div class="w-40">
          {{ transaction.type }}
        </div>
        <div class="w-40">{{ transaction.description.substring(0, 20) }}</div>
         <div class="w-40">{{ formatMoney(transaction.amount) }}</div>
      </div>
     
    </div>
  </div>
</template>
<script>
 const mapGetters = require("vuex")["mapGetters"];
 import PlusSign from "../../components/ui/PlusSign";
 import MinusSign from"../../components/ui/MinusSign";
export default {
  components: {
     PlusSign,
      MinusSign,
  },
  computed: {
    ...mapGetters(["getTransactions"]),
  },
};
</script>