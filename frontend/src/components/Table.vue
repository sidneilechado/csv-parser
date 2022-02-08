<template>
  <div class="wrapper">
    <text>Click button to show {{ statusToShow() }} contacts  </text>
    <button @click="handleStatus"> Click me </button>

    <table border>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th v-if="isValid">Options</th>
          <th v-if="!isValid">Log</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="contact in contactList" :key="contact.id">
          <td>{{contact.firstName}}</td>
          <td>{{contact.lastName}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.email}}</td>
          <th v-if="isValid">
            <button @click="deleteContact(contact.id)">Delete contact</button>
          </th>
          <th v-if="!isValid">{{contact.log}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Table',
  computed: {
    isValid(): boolean {
      return this.status === 'valid';
    },
  },
  data() {
    return {
      contactList: [],
      status: 'valid',
    };
  },
  methods: {
    statusToShow() {
      return this.status === 'valid' ? 'invalid' : 'valid';
    },
    async deleteContact(id: string) {
      axios.delete(`http://localhost:3000/api/contact/delete?id=${id}`);
      await this.getContactList();
      console.log(this.contactList);
    },
    handleStatus() {
      this.status = this.status === 'valid' ? 'invalid' : 'valid';
      this.getContactList();
    },
    async getContactList() {
      const response = await axios.get(`http://localhost:3000/api/contact/list?status=${this.status}`);
      // @ts-ignore-next-line
      this.contactList = JSON.parse(JSON.stringify(response.data));
    },
  },
  async beforeMount() {
    await this.getContactList();
  },
});
</script>

<style scoped>
  .wrapper {
    position: fixed;
    top: 25%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);
  }
</style>
