<template>
  <div class="wrapper">
    <text>Upload a csv with contacts here</text><br>
    <input
      type="file"
      accept=".csv"
      @change="handleFileUpload($event)"
    >
    <button v-on:click="sendFile">Send file</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  // tslint:disable
  name: 'InsertContacts',
  data() {
    return {
      file: '',
      content: [],
    };
  },
  methods: {
    // @ts-ignore
    handleFileUpload(event) {
      // eslint-disable-next-line
      this.file = event.target.files[0];
    },
    async sendFile() {
      // @ts-ignore
      this.$papa.parse(this.file, {
        header: true,
        skipEmptyLines: true,
        // @ts-ignore
        async complete(results) {
        // @ts-ignore
          await axios.post('http://localhost:3000/api/contact/create', {
            contactList: results.data,
          });
        },
      });
    },
  },
});
</script>
