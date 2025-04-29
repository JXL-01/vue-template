import type { ApiResult } from '@/lib/api/models/result'
import { ofetch, type FetchResponse } from 'ofetch'

export class ApiError extends Error{
  name='ApiError'  as const
  response?:FetchResponse<unknown>
  data?: ApiResult<unknown>
  message: string
  constructor(response: FetchResponse<unknown>, data: ApiResult<unknown>|undefined,message:string) {
    super(message)
    this.response = response
    this.message = message
    this.data = data
  }

  static from(response: FetchResponse<unknown>) {
    if (response._data != null && typeof response._data == 'object') {
      const result: ApiResult<unknown> = response._data as any
      return new ApiError(response, result, result.msg)
    }
    return new ApiError(response, undefined, response.statusText)
  }
}

export const client = ofetch.create({
  baseURL: import.meta.env.VITE_API_URL,
  onResponse(context) {
    if (context.response.status !== 200) {
      console.log(context.response.status)
      return
    }
    if (context.response.headers.get('Content-Type')?.includes('application/json')) {
      const result = context.response._data
      if (result.code !== 1) {
        context.response = new Response(JSON.stringify(result), {
          headers: context.response.headers,
          status: 400,
          statusText: encodeURIComponent(result.msg),
        })
        context.error = ApiError.from(context.response)
      }
    }
    console.log('response', context)
  },
  onResponseError(context) {
    console.log('error', context)
    if (context.error) {
      throw context.error
    }
    throw ApiError.from(context.response)
  },
  onRequest({ options }) {
    options.headers = {
      ...options.headers,
    }
  },

})
