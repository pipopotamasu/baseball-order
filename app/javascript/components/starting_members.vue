<template>
  <div class="starting-members inline-box">
    <table cellspacing="0" cellpadding="0" border="0">
      <thead>
        <th>#</th>
        <th>Position</th>
        <th>Name</th>
      </thead>
      <draggable v-model="order.starting_members" :element="'tbody'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
        <template v-for="(member, k) in order.starting_members" class="member">
          <member :member="member" :positions="order.positions" :index="k"></member>
        </template>
        <tr class=".ignore-elements">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </draggable>
    </table>
  </div>
</template>

<script>
import Member from './starting_member.vue'
import Draggable from 'vuedraggable'

export default {
  props: ['order'],
  components: {
    Member,
    Draggable
  },
}
</script>
