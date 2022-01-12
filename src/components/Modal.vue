<template>
  <div>
  <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Open Modal</b-button>

  <b-modal id="bv-modal-example" hide-footer>
    <div class="d-block text-center">
      <h3>Item has been added to your cart</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>
  </b-modal>
</div>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>