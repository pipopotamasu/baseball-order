<template>
  <div id="members">
    <div class="input-form">
      <el-input placeholder="Please input" v-model="input" type="text" size="20" class="member-input"></el-input>
      <el-button @click="addMember">Add</el-button>
      <el-button type="info" @click="saveMember">Save</el-button>
    </div>
    <el-card class="box-card">
      <div slot="header">
        <span>{{ members.length }} Members</span>
      </div>
      <div v-for="member in members" class="member">
        {{ member.name }}
        <!-- <span @click="deleteMember(member.order)" class="delete"><i class="el-icon-delete"></i></span> -->
        <el-button type="text" @click="deleteConfirm(member.order)"><i class="el-icon-delete"></i></el-button>
      </div>
    </el-card>

    <el-dialog
      title="Are you sure to delete below member?"
      :visible.sync="dialogVisible"
      width="30%">
      <div class="delete-target">{{ members[deleteTargetOrder].name }}</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelDelete">Cancel</el-button>
        <el-button type="primary" @click="deleteMember">Delete</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data: function () {
    return {
      input: '',
      dialogVisible: false,
      deleteTargetOrder: 0,
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
    deleteMember: function() {
      this.disableDialog();
      Vue.delete(this.members, this.deleteTargetOrder);
      this.initializeDeleteTargetOrder();

      this.members.forEach((member, i) => {
        this.members[i].order = i;
      });
    },
    deleteConfirm: function(order) {
      this.enableDialog();
      this.deleteTargetOrder = order;
    },
    cancelDelete: function() {
      this.disableDialog();
      this.initializeDeleteTargetOrder();
    },
    enableDialog: function() {
      this.dialogVisible = true;
    },
    disableDialog: function() {
      this.dialogVisible = false;
    },
    initializeDeleteTargetOrder: function() {
      this.deleteTargetOrder = 0;
    }
  }
}
</script>
