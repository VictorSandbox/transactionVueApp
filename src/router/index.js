import Vue from "vue";
import VueRouter from "vue-router";
import TransactionsCreate from "../pages/transactions/create";
import TransactionsIndex from "../pages/transactions/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/transactions/create",
    name: "TransactionsCreate",
    component: TransactionsCreate,
  },
  {
    path: "/transactions/",
    name: "TransactionsIndex",
    component: TransactionsIndex,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
