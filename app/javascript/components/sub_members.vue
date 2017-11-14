<template>
  <div class="sub-members box-card inline-box">
    <el-card>
      <div slot="header">
        <span>Members</span>
      </div>
      <draggable v-model="order.sub_members" :element="'div'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
        <div v-for="member in order.sub_members" class="member">
          {{ member.name }}
        </div>
      </draggable>
    </el-card>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'

export default {
  props: ['order'],
  components: {
    Draggable
  },
}
</script>
