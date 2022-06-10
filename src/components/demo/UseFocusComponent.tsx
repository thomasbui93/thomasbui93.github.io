import { Paragraph, XL } from '@zendeskgarden/react-typography';
import React from 'react'
import { useFocus } from '../../hooks/useFocus';

export const UseFocusComponent: React.FC = () => {
  const [ref, isFocus] = useFocus();

  return (
    <>
      <XL>UseFocus Hook</XL>
      <input ref={ref}/>
      <Paragraph>{isFocus ? 'Focused': 'Not Focus'}</Paragraph>
    </>
  )
};
