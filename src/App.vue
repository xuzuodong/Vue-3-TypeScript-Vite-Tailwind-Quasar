<template>
    <h1 class="text-4xl font-medium p-10">Hello, Vue 3 + Vite + TypeScript + ESLint + Tailwind CSS + Quasar!</h1>
    <section>
        <router-link to="/" active-class="text-primary">Home</router-link>
        <span class="px-3">|</span>
        <router-link to="about" active-class="text-primary">About</router-link>
    </section>

    <router-view></router-view>
</template>
