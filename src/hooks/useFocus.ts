import { useRef, useState, Ref, useEffect } from "react";

export const useFocus = (): [Ref<HTMLInputElement>, boolean] => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  
  useEffect(() => {
    ref.current?.addEventListener('focus', () => setIsFocused(true));
    ref.current?.addEventListener('blur', () => setIsFocused(false));
  }, [])

  return [ref, isFocused]
}
