/** @format */

let sessionId: string | undefined

export function useSessionId() {
  if (sessionId === undefined) {
    sessionId = (Math.random() + 1).toString(36).substring(5)
  }

  return sessionId
}
