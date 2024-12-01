<template>
  <ul class="parsley-errors-list filled" id="parsley-id-5" aria-hidden="false">
    <li class="parsley-required">{{ textError }}</li>
  </ul>
</template>


<script>
export default {
  props: {
    textError: {
      type: String,
      default: 'Заполните поле',
    }
  }
}
</script>


<style>

</style>