import React, { useState, useEffect, useCallback } from "react"

export enum AsyncState {
  IDLE = "idle",
  PENDING = "pending",
  SUCCESS = "success",
  ERROR = "error",
}

export const useAsync = <T, E = string>(
  asyncFunction: () => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<AsyncState>(AsyncState.IDLE)
  const [value, setValue] = useState<T | null>(null)
  const [error, setError] = useState<E | null>(null)

  const execute = useCallback(() => {
    setStatus(AsyncState.PENDING)
    setValue(null)
    setError(null)
    return asyncFunction()
      .then(response => {
        setValue(response)
        setStatus(AsyncState.SUCCESS)
      })
      .catch(error => {
        setError(error)
        setStatus(AsyncState.ERROR)
      })
  }, [asyncFunction])

  useEffect(() => {
    if (immediate) {
      execute()
    }
  }, [execute, immediate])

  return { execute, status, value, error }
}
