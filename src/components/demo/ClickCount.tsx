import { Button } from '@zendeskgarden/react-buttons'
import { Paragraph } from '@zendeskgarden/react-typography'
import React, { useEffect, useRef, useState } from 'react'

export const ClickCount: React.FC = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const intervalRef = useRef<number>();

  const clear = () => clearInterval(intervalRef.current);

  React.useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimeLeft((time) => time - 1)
    }, 1000)

    return clear
  }, [])

  React.useEffect(() => {
    if (timeLeft === 0) {
      clear()
    }
  }, [timeLeft])

  const addCount = () => timeLeft > 0 ? setClickCount(clickCount + 1) : 0;

  return (
    <div>
      <Paragraph>You have clicked {clickCount} times.</Paragraph>
      <Button onClick={addCount}>Click me!</Button>
      <Paragraph>
        Time left {timeLeft} seconds
      </Paragraph>
    </div>
  )
}
