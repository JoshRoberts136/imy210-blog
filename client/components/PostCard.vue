<!-- Josh Roberts, u23536765 -->
<template>
  <div class="p-6 border rounded-lg shadow-md hover:shadow-xl bg-white hover:bg-blue-50 transition-all">
    <h2 class="text-2xl font-semibold text-blue-600">{{ post.attributes.title }}</h2>
    <p class="text-gray-700 mt-2">{{ post.attributes.snippet }}</p>
    <p class="text-sm text-gray-500 mt-1">By {{ post.attributes.author }}</p>
    <p class="text-sm text-gray-500">Category: {{ post.attributes.category.data.attributes.name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    post: { type: Object, required: true }
  }
};
</script>