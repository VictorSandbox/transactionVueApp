<template>
  <div class="balance">
    <h1>
      Account Balance <strong>{{ formatMoney(getTotal) }}</strong>
    </h1>
  </div>
</template>
<script>
//const mapGetters = require("vuex")["mapGetters"];
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getTotal"]),
  },
};
</script>


