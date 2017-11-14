<template>
  <tr>
    <td>{{ index + 1 }}</td>
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

<script>
export default {
  props: ['member', 'positions', 'index']
}
</script>
