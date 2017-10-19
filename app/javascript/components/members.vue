<template>
  <div id="members">
    <div>
      <input v-model="input" type="text" size="20"/>
      <button @click="addMember">Add</button>
      <button @click="saveMember">Save</button>
    </div>
    <div>
      <span>{{ members.length }} members</span>
      <ul>
        <li v-for="member in members">
          {{ member.name }}
          <span @click="deleteMember(member.order)" class="delete">[×]</span>
        </li>
      </ul>
    </div>
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

<style scoped>
li {
  cursor: pointer;
}
</style>
