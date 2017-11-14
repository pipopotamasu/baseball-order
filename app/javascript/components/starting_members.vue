<template>
  <div class="starting-members inline-box">
    <table cellspacing="0" cellpadding="0" border="0">
      <thead>
        <th>#</th>
        <th>Position</th>
        <th>Name</th>
      </thead>
      <draggable v-model="order.field_members" :element="'tbody'" :options="{ animation: 200, group: 'order', filter: '.ignore-elements' }">
        <template v-for="(member, k) in order.field_members" class="member">
          <tr>
            <td>{{ k + 1 }}</td>
            <td>
              <el-select v-model="member.position" placeholder="Select">
              <el-option
                v-for="item in positions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            </td>
            <td>{{ member.name }}</td>
          </tr>
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
import Draggable from 'vuedraggable'

export default {
  props: ['order'],
  data: function() {
    return {
      positions: [
        {
          value: 'P',
          label: 'P'
        },
        {
          value: 'C',
          label: 'C'
        },
        {
          value: 'FB',
          label: 'FB'
        },
        {
          value: 'SB',
          label: 'SB'
        },
        {
          value: 'TB',
          label: 'TB'
        },
        {
          value: 'SS',
          label: 'SS'
        },
        {
          value: 'LF',
          label: 'LF'
        },
        {
          value: 'CF',
          label: 'CF'
        },
        {
          value: 'RF',
          label: 'RF'
        },
        {
          value: 'DH',
          label: 'DH'
        },
      ]
    }
  },
  components: {
    Draggable
  },
}
</script>
