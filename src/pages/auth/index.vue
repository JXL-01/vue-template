<script setup lang="ts">
import { useSignInMutation } from '@/composables/api/mutation/user'
// import { useUserInfoQueryOptions } from '@/composables/api/query/user'
// import { useQuery } from '@tanstack/vue-query'

definePage({
  name: 'auth',
})
// const { refetch } = useQuery(useUserInfoQueryOptions())
const { mutateAsync: signInMutateAsync, isPending } = useSignInMutation()
function signInHandle() {
  signInMutateAsync().then(() => {
    // refetch()
  }).catch((err) => {
    console.log('error1111', err.message)
  })
}
const { t } = useI18n()
</script>

<template>
  <div>
    auth
    <Button :disabled="isPending" @click="signInHandle">
      login
    </Button>
    <div>
      {{ t('hello') }}
    </div>
  </div>
</template>

<style scoped>

</style>
