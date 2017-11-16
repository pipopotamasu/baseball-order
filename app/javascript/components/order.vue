<template>
  <el-collapse-item :title="`Game${i + 1}`" :name="i">
    <div class="order-box">
      <starting-members :order="order"></starting-members>
      <sub-members :order="order"></sub-members>
    </div>
  </el-collapse-item>
</template>

<script>
import StartingMembers from './starting_members.vue'
import SubMembers from './sub_members.vue'
import Draggable from 'vuedraggable'

export default {
  props: ['order', 'i'],
  components: {
    StartingMembers,
    SubMembers
  },
}
</script>
