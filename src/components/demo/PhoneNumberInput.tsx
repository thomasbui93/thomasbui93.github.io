import { Paragraph, XL } from "@zendeskgarden/react-typography";
import React, { ChangeEventHandler } from "react"
import { useState } from "react"
import { memoize } from "../../utils/memoize";

const DIGIT_KEYS = ['0','1','2','3','4','5','6','7','8','9']

const validatePhone = (inputValue: string):string => {
  let value = '';
  for (let i = 0; i < inputValue.length; i ++) {
    if (value.length > 12) break;
    const letter = inputValue[i];
    value += DIGIT_KEYS.indexOf(letter) > -1 ? letter : '';
    if (value.length === 3) {
      value = '(' + value + ')';
    }
    if (value.length === 8) {
      value += '-';
    }
  }

  return value;
}

const memoValidation = memoize(validatePhone)

export const PhoneNumberInput: React.FC = () => {
  const [phone, setPhone] = useState<string>('');

  const updatePhone: ChangeEventHandler<HTMLInputElement> = (event) => {
    setPhone(memoValidation(event.target.value));
  }

  return (
    <>
      <XL> PhoneInputNumber</XL>
      <Paragraph>
        Only accepts numerical digits
        - format the number automatically as (123)456-7890 by
        - adding the parenthesis when the 4th digit is entered, also adding - before 7th digit
      </Paragraph>
      <input value={phone} onChange={updatePhone}/>
    </>
  )  
}
