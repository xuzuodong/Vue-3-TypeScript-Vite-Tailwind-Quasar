<template>
    <div>{{ count }}</div>
    <button @click="count++">count ++</button>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
const count = ref(0)
const a = "a"
</script>
