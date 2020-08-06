/** @format */

// @TODO Handle DNT

import axios from 'axios'
import qs from 'query-string'
import { useLocation, WindowLocation } from '@reach/router'
import { useSessionId } from './session'
import { locationApiBaseUrl } from '../app/constants'

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

  const approxLocation = await fetchApproximateLocation()
  let country = undefined
  let region = undefined
  if (approxLocation !== null) {
    country = approxLocation.country
    region = approxLocation.region
  }

  const sessionId = useSessionId()

  const session: Session = {
    id: sessionId,
    height: window.innerHeight,
    width: window.innerWidth,
    country,
    region,
  }

  // Do not actually record page visits in development
  if (process.env.NODE_ENV === 'development') {
    console.debug('Session', session)
    return
  }

  return axios.post('/.netlify/functions/sessionCreate', session)
}

let approxLocationCache: Location = null

interface Location {
  country: string
  region: string
}

export async function fetchApproximateLocation(): Promise<Location | null> {
  if (approxLocationCache !== null) {
    return approxLocationCache
  }

  try {
    // @TODO Replace this api endpoint with a netlify function for guaranteed
    // privacy
    const res = await axios.get('/json/', {
      baseURL: locationApiBaseUrl,
      params: {
        fields: ['status', 'message', 'country', 'region'],
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'comma' })
      },
    })

    approxLocationCache = res.data
  } catch (error) {
    console.error(error)
  }

  return approxLocationCache
}
