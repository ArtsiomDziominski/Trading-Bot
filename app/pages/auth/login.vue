<template>
  <AuthLayout
    title="Войти в аккаунт"
    subtitle="Добро пожаловать обратно в CryptoBot"
  >
    <LoginForm />
  </AuthLayout>
</template>

<script setup lang="ts">
import LoginForm from "~/components/auth/LoginForm.vue";
import AuthLayout from "~/components/auth/AuthLayout.vue";

definePageMeta({
  middleware: 'auth'
})
</script>
