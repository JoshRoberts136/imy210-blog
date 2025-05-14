<!-- Josh Roberts, u23536765 -->
<template>
  <div v-html="renderedContent" class="prose max-w-none"></div>
</template>
<script>
import { marked } from 'marked';
export default {
  props: {
    content: { type: String, required: true }
  },
  computed: {
    renderedContent() {
      return marked(this.content);
    }
  }
};
</script>