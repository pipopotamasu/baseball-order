<template>
  <div id="members">
    <div>
      <el-input placeholder="Please input" v-model="input" type="text" size="20" style="width: auto;"></el-input>
      <el-button @click="addMember">Add</el-button>
      <el-button type="info" @click="saveMember">Save</el-button>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">{{ members.length }} Members</span>
      </div>
      <div v-for="member in members" class="text item">
        {{ member.name }}
        <span @click="deleteMember(member.order)" class="delete">[×]</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      input: '',
      members: [
        { id: 1, order: 0, name: 'Murakami' },
        { id: 2, order: 1, name: 'Inoue' }
      ]
    }
  },
  methods: {
    addMember: function() {
      if(this.input == '') return false;
      Vue.set(this.members, this.members.length, { id: this.members.length + 1, order: this.members.length, name: this.input });
      this.input = '';
    },
    saveMember: function() {

    },
    deleteMember: function(order) {
      if(!confirm('Are you sure?')) return false;
      Vue.delete(this.members, order);

      this.members.forEach((member, i) => {
        this.members[i].order = i;
      });
    }
  }
}
</script>
