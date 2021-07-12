<template>
  <div class="flex flex-col items-center" @keyup.enter="addTransaction">
    <h1>Add Transaction</h1>
    <!-- transaction type -->
    <div class="toggle-switch" >
      <input
        type="radio"
        id="debit"
        name="transaction-type"
        v-model="form.type"
        value="debit"
        checked
      />
      <label for="debit">Debit</label>
      <input
        type="radio"
        id="credit"
        name="transaction-type"
        v-model="form.type"
        value="credit"
     
      />
      <label for="credit">Credit</label>
    </div>

    <template v-if="errors">
      <ul>
        <li v-for="(error,index) in errors" v-bind:key=(index)>{{ error }}</li>
      </ul>
    </template>
    <!-- transactin description -->
    <div class="input-field">
      <label for="description">Description</label>
      <input
        type="text"
        id="description"
        name="transaction-description"
        v-model="form.description"
        placeholder="Enter description"
      />
    </div>
    <!-- amount -->
    <div class="input-field">
      <label for="amount">Amount</label>
      <span class="currency">$</span>
      <input
        type="text"
        id="amount"
        v-model="form.amount"
        name="transaction-amount"
      />
    </div>
    <div>
      <button @click.prevent="addTransaction">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        type: "credit",
        amount: "",
        description: "",
      },
      errors: [],
    };
  },
  methods: {
    addTransaction: function () {

      if (!this.validForm()) {
        return;
      }
      this.form.amount = this.form.amount*100;
      this.$store.dispatch("addTransaction", this.form);
      this.$router.push({ path: '/transactions' });
    },
    validForm: function () {
      this.errors =[]
      if (!this.form.description) {
        this.errors.push("Description is required");
      }
      if (!this.form.amount) {
        this.errors.push("Amount is required");
      }

      return (this.errors.length)?false:true

      }
   },
};
</script>