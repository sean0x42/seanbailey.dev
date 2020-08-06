/** @format */

// @TODO Handle DNT

import axios from 'axios'
import { useLocation, WindowLocation } from '@reach/router'
import { useSessionId } from './session'

interface Visit {
  sessionId: string
  url: string
  params: string | null
}

interface RecordVisitConfig {
  location?: WindowLocation
}

export async function recordVisit(config: RecordVisitConfig) {
  const sessionId = useSessionId()

  // Location may be provided by caller for performance purposes
  let location = config.location
  if (location === undefined) {
    location = useLocation()
  }

  const visit: Visit = {
    url: location.pathname,
    params: location.search === '' ? null : location.search,
    sessionId,
  }

  // Do not actually record page visits in development
  if (process.env.NODE_ENV === 'development') {
    console.debug('Visit', visit)
    return
  }

  return axios.post('/.netlify/functions/visitsCreate', visit)
}

let isSessionRecorded = false

interface Session {
  id: string
  height: number
  width: number
  country?: string
  region?: string
  userAgent?: string
}

export async function recordSession() {
  // Only ever call this function once
  if (isSessionRecorded) {
    return
  }

  isSessionRecorded = true
  const sessionId = useSessionId()

  const session: Session = {
    id: sessionId,
    height: window.innerHeight,
    width: window.innerWidth,
  }

  // Do not actually record page visits in development
  if (process.env.NODE_ENV === 'development') {
    console.debug('Session', session)
    return
  }

  return axios.post('/.netlify/functions/sessionCreate', session)
}
