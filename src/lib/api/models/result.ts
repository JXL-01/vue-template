export interface ApiResult<D = unknown> {
  data: D
  code: number
  msg: string
}

export interface ApiListResult<I = unknown> extends ApiResult<{
  list: I[]
  total: number
  count: number
}> {
}
