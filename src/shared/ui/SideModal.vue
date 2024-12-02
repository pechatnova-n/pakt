<template>
  <div class="sidebar-right" :class="{'active-enter-done' : isActiveSideModal}">
		<div class="overlay" @click="$emit('changeActiveSideModal')"></div>
		<div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActiveSideModal: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['changeActiveSideModal']
}
</script>

<style scoped>
  .sidebar-right {
      display: none;
    }

  .sidebar-right.active-enter-done {
      display: flex;
    }
</style>