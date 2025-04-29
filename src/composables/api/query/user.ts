import type { ApiResult } from '@/lib/api/models/result'
import type { UserInfo } from '@/lib/api/models/user'
import { queryOptions } from '@tanstack/vue-query'
import { client } from '../client'

export function useUserInfoQueryOptions() {
  return queryOptions({
    queryKey: ['user', 'info'],
    queryFn: () => client<ApiResult<UserInfo>>('/api/micro/user/info', {
      method: 'GET',
    }),
  })
}
