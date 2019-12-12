<template>
  <div id="app" class="small-container">
    <center>
      <h1>Credit Cards</h1>
    </center>

    <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('home')"
          :class="{ active: isActive('home') }"
          href="#home"
        >Home</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('cards')"
          :class="{ active: isActive('cards') }"
          href="#cards"
        >Card List</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          @click.prevent="setActive('countries')"
          :class="{ active: isActive('countries') }"
          href="#countries"
        >Country Config</a>
      </li>
    </ul>
    <br />
    <div class="tab-content py-3" id="main">
      <div class="tab-pane fade" :class="{ 'active show': isActive('home') }" id="home">
        <center>
          <credit-card-form @add:creditCard="addCreditCard" />
        </center>
      </div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('cards') }" id="cards">
        <credit-cards-table :creditCards="creditCards" />
      </div>

      <div class="tab-pane fade" :class="{ 'active show': isActive('countries') }" id="countries">
        <country-table :countries="countries" />
      </div>
    </div>
  </div>
</template>

<script>
import CreditCardsTable from "@/components/CreditCardsTable.vue";
import CreditCardForm from "@/components/CreditCardForm.vue";
import CountryTable from "@/components/CountryTable.vue";
import CreditCardsApi from "@/services/api/CreditCards";
import CountriesApi from "@/services/api/Countries";

export default {
  name: "app",
  components: {
    CreditCardsTable,
    CreditCardForm,
    CountryTable
  },
  data() {
    return {
      activeItem: "home",
      creditCards: [],
      countries: [
        {
          iso2: "PR",
          name: "Puerto Rico",
          banned: true,
          flag: ""
        },
        {
          iso2: "PY",
          name: "Paraguay",
          banned: true,
          flag: ""
        },
        {
          iso2: "QA",
          name: "Qatar",
          banned: true,
          flag: ""
        },
        {
          iso2: "AD",
          name: "Andorra",
          banned: true,
          flag: ""
        }
      ]
    };
  },
  created() {
    CreditCardsApi.getAll().then(
      response => (this.creditCards = response),
      error => {
        console.error(error);
      }
    );

    CountriesApi.getAll().then(
      response => (this.countries = response),
      error => {
        console.error(error);
      }
    );
  },
  methods: {
    addCreditCard(creditCard) {
      CreditCardsApi.addCard(creditCard).then(
        response => {
          this.countries = response;
          this.creditCards = [...this.creditCards, creditCard];
        },
        error => console.error(error)
      );
    },
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    }
  }
};
</script>

<style>
button {
  background: #009435;
  border: 1px solid #009435;
}

.small-container {
  max-width: 680px;
}
</style>