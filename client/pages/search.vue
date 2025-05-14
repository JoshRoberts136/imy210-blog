<!-- Josh Roberts, u23536765 -->
<template>
  <div class="container mx-auto p-4 max-w-7xl">
    <h1 class="text-3xl font-bold mb-4 text-center">Search Posts</h1>
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>
    <input v-model="query" @input="searchPosts" placeholder="Search by title or author" class="mb-4 p-2 border rounded w-full" />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
      query: '',
      error: null
    };
  },
  methods: {
    async searchPosts() {
      if (!this.query) {
        this.posts = [];
        this.error = null;
        return;
      }
      try {
        const url = `${this.$config.public.strapiApiUrl}/api/posts?filters[$or][0][title][$contains]=${this.query}&filters[$or][1][author][$contains]=${this.query}&populate=*`;
        const res = await this.$axios.get(url);
        this.posts = res.data.data || [];
        this.error = null;
      } catch (error) {
        console.error('Search Error:', error);
        this.error = 'Failed to search posts';
      }
    }
  }
};
</script>