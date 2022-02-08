<template>
  <div class="wrapper">
    <text>Upload a csv with contacts here</text><br>
    <input ref="file" v-on:change="sendFile" type="file">
    <button v-on:click="sendFile">Send file</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'InsertContacts',
  methods: {
    async sendFile() {
      // @ts-ignore
      console.log(this.$refs.files.files);
      const dataForm = new FormData();
      // for (const file of this.$refs.files.files) {
      //   dataForm.append('file', file);
      // }
      // const res = await fetch('http://localhost:3000/upload', {
      //   method: 'POST',
      //   body: dataForm,
      // });
      // const data = await res.json();
    },
    setup() {
      const file = ref(null);
      const handleFileUpload = async () => {
      // debugger;
      // @ts-ignore
        console.log('selected file', file.value.files);
      // Upload to server
      };

      return {
        handleFileUpload,
        file,
      };
    },
  },
});
</script>
