import { Grid, Row } from '@zendeskgarden/react-grid';
import { XL } from '@zendeskgarden/react-typography';
import React from 'react';
import { useState } from 'react';

type KAccordionSectionProps = {
  title: string,
  children: JSX.Element[] | JSX.Element | string,
  index?: number
}

type KAccordionProps = {
  children: JSX.Element[] | JSX.Element,
}

export const KAccordionSection: React.FC<KAccordionSectionProps> = ({children, title, index}) => {
  return (
    <KAccordionContext.Consumer>
      {({currentIndex, selectIndex}) => <>
        <Grid>
          <Row>
            <XL>{title}</XL>
            <button onClick={() => selectIndex(index || 0)}>{currentIndex === index ? '-' : '+'}</button>
          </Row>
          <Row>{ currentIndex === index ? children : ''}</Row>
        </Grid>
      </>}
    </KAccordionContext.Consumer>
  )
}

const KAccordionContext = React.createContext({
  currentIndex: -1,
  selectIndex: (val: number) => {}
});

export const KAccordion: React.FC<KAccordionProps> = ({children}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (<KAccordionContext.Provider value={{
    currentIndex,
    selectIndex: (val) => {
      setCurrentIndex(val === currentIndex ? -1 : val)
    }
  }}>
    {
      React.Children.map(children, (child, index) => (
        <KAccordionSection
          {...child.props}
          key={index}
          index={index}
        />
      ))
    }
  </KAccordionContext.Provider>)
}
