export interface CraftGraphqlVariables {
  [variable: string]: unknown
}

export type CraftGraphQLError = {
  message: string
  locations?: {
    line: number
    column: number
  }[]
  path?: (string | number)[]
  extensions?: {
    category?: string
    code?: string
    validation?: Record<string, string[]>
    [key: string]: any
  }
}

export interface CraftGraphQLResponseError extends Error {
  response?: {
    _data?: {
      errors?: CraftGraphQLError[]
    }
    status?: number
    statusText?: string
  }
}
