import { useMutation } from '@tanstack/vue-query'
import { client } from '../client'

export function useSignInMutation() {
  return useMutation({
    mutationFn: () => client('/user/signin', {
      method: 'POST',
      body: {
        email: 'test@test.com',
        password: '123456',
      },
    }),
  })
}
