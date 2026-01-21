<template>
  <AuthLayout
    title="Создать аккаунт"
    subtitle="Присоединяйтесь к тысячам трейдеров"
  >
    <RegisterForm />
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "~/components/auth/AuthLayout.vue";
import RegisterForm from "~/components/auth/RegisterForm.vue";

definePageMeta({
  middleware: 'auth'
})
</script>
