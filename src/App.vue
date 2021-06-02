<template>
    <h1>Hello, Vue 3 + Vite + TypeScript + ESLint!</h1>
    <section>
        <router-link to="/">Home</router-link>
        <router-link to="about">About</router-link>
    </section>
    <router-view></router-view>
</template>

<style scoped>
h1 {
    padding: 30px;
}

section a {
    padding: 10px;
}
</style>
