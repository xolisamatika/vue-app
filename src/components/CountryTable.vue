<template>
  <div id="country-table">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Banned</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="country in countries" :key="country.iso2">
          <td>{{ country.name }}</td>
          <td>{{ country.iso2 }}</td>
          <td>{{ country.banned ? "Yes" : "No" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "country-table",
  props: {
    countries: Array,
  },
};
</script>

<style scoped></style>