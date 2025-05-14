<template>
  <div>
    <h1>Blog Posts</h1>
    <select v-model="selectedCategory" @change="fetchPosts">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category.id" :value="category.id">
        {{ category.attributes.name }}
      </option>
    </select>
    <div v-if="message" :style="{ color: message.includes('Error') ? 'red' : 'yellow' }">
      {{ message }}
    </div>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.attributes.title }}</h2>
      <p>By {{ post.attributes.author }}</p>
      <p>{{ post.attributes.snippet }}</p>
      <p>Category: {{ post.attributes.category.data.attributes.name }}</p>
    </div>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()
const strapiApiUrl = runtimeConfig.public.strapiApiUrl

const selectedCategory = ref('')
const categories = ref([])
const posts = ref([])
const message = ref('')

const fetchCategories = async () => {
  try {
    console.log('Fetching categories from:', strapiApiUrl)
    const { data } = await useFetch(`${strapiApiUrl}/api/categories`)
    categories.value = data.value.data
    console.log('Categories:', categories.value)
  } catch (error) {
    message.value = `Error fetching categories: ${error.message}`
    console.error('Fetch categories error:', error)
  }
}

const fetchPosts = async () => {
  try {
    const url = selectedCategory.value
      ? `${strapiApiUrl}/api/posts?filters[category][id][$eq]=${selectedCategory.value}&populate=category`
      : `${strapiApiUrl}/api/posts?populate=category`
    console.log('Fetching posts from:', url)
    const { data } = await useFetch(url)
    posts.value = data.value.data
    console.log('Posts:', posts.value)
    message.value = posts.value.length === 0 ? 'No posts found' : ''
  } catch (error) {
    message.value = `Error fetching posts: ${error.message}`
    console.error('Fetch posts error:', error)
  }
}

await fetchCategories()
await fetchPosts()
</script>