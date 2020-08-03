/** @format */

let sessionCache: string | undefined

export function useSessionId() {
  if (sessionCache === undefined) {
    sessionCache = (Math.random() + 1).toString(36).substring(5)
  }

  return sessionCache
}
