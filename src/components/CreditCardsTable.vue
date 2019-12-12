<template>
  <div id="credit-cards-table">
    <table v-if="creditCards.length > 0">
      <thead>
        <tr>
          <th>Number</th>
          <th>Country Name</th>
          <th>Country Code</th>
          <th>Country Flag</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="creditCard in creditCards" :key="creditCard.number">
          <td>{{ creditCard.number }}</td>
          <td>{{ creditCard.countryName }}</td>
          <td>{{ creditCard.countryIso2 }}</td>
          <td>{{ creditCard.countryFlag }}</td>
        </tr>
      </tbody>
    </table>
    <center v-else><h2>No Credit Cards</h2></center>
  </div>
</template>

<script>
export default {
  name: "credit-cards-table",
  props: {
    creditCards: Array,
  },
};
</script>

<style scoped></style>