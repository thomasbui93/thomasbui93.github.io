import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T): [T, (data: T) => void] {
  
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || '');
      setValue(data);
    } catch (err) {
      //setValue(initialValue);
    }
  }, [])

  function setStorageValue(data: T): void {
    setValue(data);
    window.localStorage.setItem(key, JSON.stringify(data));
  }

  return [value, setStorageValue]
}
