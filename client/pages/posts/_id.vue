<!-- Josh Roberts, u23536765 -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">{{ post.attributes.title }}</h1>
    <p class="text-gray-500 mb-2">By {{ post.attributes.author }}</p>
    <p class="text-gray-500 mb-4">Category: {{ post.attributes.category.data.attributes.name }}</p>
    <MarkdownRenderer :content="post.attributes.content" />
  </div>
</template>
<script>
import MarkdownRenderer from '~/components/MarkdownRenderer.vue';
export default {
  components: { MarkdownRenderer },
  async asyncData({ $axios, params, $config }) {
    const res = await $axios.get(`${$config.public.strapiApiUrl}/api/posts/${params.id}?populate=*`);
    return { post: res.data.data };
  }
};
</script>