<template>
  <div class="home">
    <Table status=""/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';

export default defineComponent({
  name: 'ListContacts',
  data() {
    return {
      status: 'valid',
    };
  },
  components: {
    Table,
  },
});
</script>
