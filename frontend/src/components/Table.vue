<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="contact in contactList" :key="contact.id">
          <td>{{contact.firstName}}</td>
          <td>{{contact.lastName}}</td>
          <td>{{contact.phone}}</td>
          <td>{{contact.email}}</td>
          <td>text1.3</td>
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
  data() {
    return {
      contactList: [],
    };
  },
  async beforeCreate() {
    const response = await axios.get('http://localhost:3000/api/contact/list?status=valid');
    // @ts-ignore-next-line
    this.contactList = JSON.parse(JSON.stringify(response.data));
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
