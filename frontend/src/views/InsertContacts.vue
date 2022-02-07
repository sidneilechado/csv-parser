<template>
  <FileUploader />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FileUploader from '@/components/FileUploader.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'InsertContacts',
  components: {
    FileUploader,
  },
});
</script>
