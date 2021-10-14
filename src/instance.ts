import './index.css'

let zIndex = 10

const DEFAULT_OPTIONS = {
  // 
}

export default function Loading(options = {}) {
  if (typeof window === 'undefined') return

  options = {
    ...DEFAULT_OPTIONS,
    ...options
  }

  // 
}
