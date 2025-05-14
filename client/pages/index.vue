<!-- Josh Roberts, u23536765 -->
<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">Blog Posts</h1>
    <select v-model="selectedCategory" @change="fetchPosts" class="mb-4 p-2 border rounded w-full md:w-1/4">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.attributes.name }}
      </option>
    </select>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>
<script>
import PostCard from '~/components/PostCard.vue';
export default {
  components: { PostCard },
  data() {
    return {
      posts: [],
      categories: [],
      selectedCategory: ''
    };
  },
  async asyncData({ $axios, $config }) {
    const [postsRes, categoriesRes] = await Promise.all([
      $axios.get(`${$config.public.strapiApiUrl}/api/posts?populate=*`),
      $axios.get(`${$config.public.strapiApiUrl}/api/categories`)
    ]);
    return {
      posts: postsRes.data.data,
      categories: categoriesRes.data.data
    };
  },
  methods: {
    async fetchPosts() {
      const url = this.selectedCategory
        ? `${this.$config.public.strapiApiUrl}/api/posts?filters[category][id][$eq]=${this.selectedCategory}&populate=*`
        : `${this.$config.public.strapiApiUrl}/api/posts?populate=*`;
      const res = await this.$axios.get(url);
      this.posts = res.data.data;
    }
  }
};
</script>