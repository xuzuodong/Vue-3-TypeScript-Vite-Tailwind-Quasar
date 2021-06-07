<template>
    <h1 class="text-4xl font-medium p-10">Hello, Vue 3 + Vite + TypeScript + ESLint + Tailwind CSS!</h1>
    <section>
        <router-link to="/" active-class="text-blue-600" class="text-blue-300">Home</router-link>
        <span class="px-3">|</span>
        <router-link to="about" active-class="text-blue-600" class="text-blue-300">About</router-link>
    </section>

    <router-view class="mt-4"></router-view>
</template>
