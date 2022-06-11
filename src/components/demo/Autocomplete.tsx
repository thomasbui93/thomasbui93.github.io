import { Paragraph, UnorderedList, XL } from '@zendeskgarden/react-typography'
import React, { ChangeEventHandler, KeyboardEventHandler, ReactEventHandler, useState } from 'react'

export type AutocompleteSuggestion = {
  name: string
}

export type AutocompleteProps = {
  suggestions: AutocompleteSuggestion[]
}

export const Autocomplete: React.FC<AutocompleteProps> = ({suggestions}) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestedItems, setSuggestedItems] = useState<AutocompleteSuggestion[]>([]);
  const [activeOption, setActiveOption] = useState<number>(0);
  const [showNoSuggestion, setShowNoSuggestion] = useState<boolean>(false);

  const selectSuggestion = (index: number) => {
    setInputValue(suggestedItems[index].name);
    setSuggestedItems([]);
    setShowNoSuggestion(false);
  }

  const onChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value) {
      const suggested = suggestions.filter(({name}) => name.toLowerCase().indexOf(value.toLowerCase()) > -1);
      setSuggestedItems(suggested);
      setActiveOption(0);
      setShowNoSuggestion(suggested.length === 0);
    } else {
      setSuggestedItems([]);
    }
  }

  const selectOption: KeyboardEventHandler = (event) => {
    if (suggestedItems.length === 0) return;

    const moduleLength = suggestedItems.length;

    if (event.key === 'ArrowUp') {
      setActiveOption((activeOption + moduleLength - 1)% moduleLength);
    }
    if (event.key === 'ArrowDown') {
      setActiveOption((activeOption + 1)%moduleLength);
    }

    if (event.key === 'Enter' || event.key === 'ArrowRight') {
      selectSuggestion(activeOption);
    }
  }

  return (<div>
    <XL>Autocomplete</XL>
    <div>
      <input type="text"
        value={inputValue}
        onKeyDown={selectOption}
        onChange={onChangeHandler}/>
    </div>
    <div>
      {
        suggestedItems.length > 0 ? <UnorderedList>
          {suggestedItems.map((item, index) => (
            <UnorderedList.Item key={index} onClick={() => selectSuggestion(index)} style={{backgroundColor: index == activeOption ? 'red': 'transparent'}}>
              {item.name}
            </UnorderedList.Item>
          ))}
        </UnorderedList> : <Paragraph> { showNoSuggestion ? 'No suggestions!': '' }</Paragraph>
      }
    </div>
  </div>)
}
