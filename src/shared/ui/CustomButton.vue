<template>
  <button class="button" :disabled="isDisabled">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    buttonSize: {
      type: [ String, Number ],
      default: '20',
    },
    isDisabled: {
      type: Boolean,
      default: false
    }
  }, 
  data() {
    return {

    }
  },
  computed: {

  }

}
</script>

<style scoped>
  .button {
      width: v-bind(buttonSize + 'rem'); 
  }
</style>