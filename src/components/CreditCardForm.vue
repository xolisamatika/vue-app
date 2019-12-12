<template>
  <div id="credit-card-form">
    <form @submit.prevent="handleSubmit">
      <label ref="number" >Credit Card Number</label>
      <input
        ref="number"
        type="text"
        :class="{ 'has-error': submitting && invalidNumber }"
        v-model="creditCard.number"
        @focus="clearStatus"
        @keypress="clearStatus"
      />
      <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Employee successfully added</p>
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "credit-card-form",
  data() {
    return {
      submitting: false,
      error: false,
      success: false,
      creditCard: {
        number: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      this.submitting = true;
      this.clearStatus();
      if (this.invalidNumber) {
        this.error = true;
        return;
      }
      this.$emit("add:creditCard", this.creditCard);
      this.$refs.number.focus()
      this.creditCard = {
        number: ""
      };
      this.error = false;
      this.success = true;
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    }
  },
  computed: {
    invalidNumber() {
      return this.creditCard.number === "";
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>