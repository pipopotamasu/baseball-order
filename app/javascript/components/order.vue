<template>
  <div class="order-box">
    <starting-members :order="order"></starting-members>
    <sub-members :order="order"></sub-members>
  </div>
</template>

<script>
import StartingMembers from './starting_members.vue'
import SubMembers from './sub_members.vue'
import Draggable from 'vuedraggable'

export default {
  props: ['order'],
  components: {
    StartingMembers,
    SubMembers
  },
}
</script>
