import React, { useEffect, useState } from "react"
import { MD, XL } from "@zendeskgarden/react-typography"

type MatchMeMatrixProps = {
  edgeTile: number,
  setWin: (win: boolean) => void,
  win: boolean,
  timestamp: Date
}
type SourceState = {
  id: number,
  crossed: boolean
}

const shuffle = (array: number[]): number[] => {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const getIndicesSet = (uniqueCount: number): number[] => {
  const indicesSet = new Array(uniqueCount)
  for (let i = 0; i < indicesSet.length; i++) {
    indicesSet[i] = Math.floor(Math.random() * 905)
  }
  return shuffle([...indicesSet, ...indicesSet])
}

const redBackground = '#fab1a0';

export const MatchMeMatrix: React.FC<MatchMeMatrixProps> = ({edgeTile, setWin, win, timestamp}: MatchMeMatrixProps) => {
  const [source, setSource] = useState<SourceState[]>(getIndicesSet(edgeTile * edgeTile/2)
    .map(index => ({
      id: index,
      crossed: false,
    })));
  useEffect(() => {
    setSource(getIndicesSet(edgeTile * edgeTile/2)
      .map(index => ({
        id: index,
        crossed: false,
      }))
    )
    setActive([])
    setWin(false)
  }, [edgeTile, timestamp])
  const [active, setActive] = useState<number[]>([]);

  const toggle = (index: number) => {
    if (source[index].crossed) return;
    const newSource = [...source]
    let newActive: number[] = [];
    if (active.indexOf(index) > -1) {
      newActive = active.filter(id => id !== index)
    } else {
      newActive = [...active];
      if (newActive.length >= 2) newActive.pop()
      newActive.push(index)
    }
    if (newActive.length === 2
      && newSource[newActive[0]].id === newSource[newActive[1]].id) {
      newSource[newActive[0]].crossed = true;
      newSource[newActive[1]].crossed = true;
      setWin(source.filter(({crossed}) => crossed).length === source.length);
      setActive([]);
      setSource(newSource);
    } else {
      setActive(newActive);
    }
  }
  const blockWidth = 50;

  return <div style={{
    width: `${(blockWidth + 10) * edgeTile}px`,
    height: `${(blockWidth + 10) * edgeTile}px`,
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: win ? redBackground : 'transparent'
  }}>
    { win ? <XL style={{
      lineHeight: `${(blockWidth + 10) * edgeTile}px`,
      textAlign: 'center',
      width: '100%',
      color: 'white'
    }}>You won!</XL> : source.map(({
      id,
      crossed
    }, index) => <div
      style={{
        lineHeight: `${blockWidth}px`,
        textAlign: 'center',
        width: `${blockWidth}px`,
        height: `${blockWidth}px`,
        backgroundColor: crossed ? 'grey' : 'beige',
        margin: '5px',
        cursor: crossed ? 'auto': 'pointer',
        border: `1px solid ${active.indexOf(index) > -1 ? 'red': 'transparent'}`
      }}
      key={index} 
      onClick={() => toggle(index)}>
        <img
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/thumbnails-compressed/${toImageIndex(id)}.png`}
          alt={toImageIndex(id)}
          style={{
            display: active.indexOf(index) > -1 || crossed ? 'block' : 'none',
          }}
        />
    </div>)}
  </div> 
}

const toImageIndex = (id:number):string => {
  if (id < 9) return '00' + id;
  if (id < 99) return '0' + id;
  return id + '';
} 

export const MatchMeMatrixComponent: React.FC = () => {
  const [edgeCount, setEdgeCount] = useState<number>(0);
  const [win, setWin] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timestamp, setTimestamp] = useState<Date>(new Date());
  const availableEdges = [4, 6, 8, 10];
  const selectEdgeCount = (edge: number) => {
    setEdgeCount(edge)
    setIsPlaying(true)
    setTimestamp(new Date())
  }
  useEffect(() => {
    if (win) {
      setIsPlaying(false)
    }
  }, [win])
  return <div>
    { edgeCount ? <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <MatchMeMatrix edgeTile={edgeCount} setWin={setWin} win={win} timestamp={timestamp}/>
    </div>: '' }
    <div style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      { isPlaying ? '' : <div style={{textAlign: 'center'}}>
          <MD>Select the number of tiles in the edge</MD>
        </div> 
      }
      <div style={{
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        {
          availableEdges.map(edge => <div
            key={edge} 
            onClick={() => selectEdgeCount(edge)}
            style={{
              height: '50px',
              width: '50px',
              border: '1px solid black',
              lineHeight: '50px',
              textAlign: 'center',
              margin: '5px',
              cursor: 'pointer',
              backgroundColor: edgeCount === edge ? redBackground : 'transparent'
            }}
            >{edge}</div>)
        }
      </div>
    </div>
  </div>
}
