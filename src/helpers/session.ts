export function useSessionId() {
  if (window.__sessionId === undefined) {
    window.__sessionId = (Math.random() + 1).toString(36).substring(5);
  }

  return window.__sessionId
}
