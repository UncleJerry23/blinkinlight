/* eslint-disable react/prop-types */
import React, { useState } from 'react';

let prev;
let counter = 6;
let countdown = true;

const Lamp = props => {

  if(countdown) {
    if(props.lit != prev) {
      counter--;
      prev = props.lit;
    }
  }
  if(counter === 0) {
    counter = 5;
    countdown = false;
  }
  if(!countdown) {
    setTimeout(() => {
      countdown = true;
    }, 2000);
  }

  const colors = ['#2DDFFF', '#F5F474', '#E33CC7', '#FFAA47', '#F54D28'];

  const numbers = [
    ['topRight', 'bottomRight'], // 1
    ['top', 'topRight', 'middle', 'bottomLeft', 'bottom'], // 2
    ['top', 'topRight', 'middle', 'bottomRight', 'bottom'], // 3
    ['topLeft', 'middle', 'topRight', 'bottomRight'], // 4
    ['top', 'topLeft', 'middle', 'bottomRight', 'bottom'], // 5
  ];

  let lit = numbers[counter - 1];

  const horizontal = {
    width: '100px',
    height: '20px',
    borderRadius: '10px',
    backgroundColor: colors[counter - 1],
  }
  const verticalContainer = {
    width: '100px',
    display: 'flex',
    justifyContent: 'space-between'
  };
  const vertical = {
    width: '20px',
    height: '100px',
    borderRadius: '10px',
    backgroundColor: colors[counter - 1],
  }
  
  const top = {...horizontal};
  const middle = {...horizontal};
  const bottom = {...horizontal};
  top.opacity = lit.includes('top') ? 1 : 0.1;
  middle.opacity = lit.includes('middle') ? 1 : 0.1;
  bottom.opacity = lit.includes('bottom') ? 1 : 0.1;

  const topLeft = {...vertical};
  const topRight = {...vertical};
  const bottomLeft = {...vertical};
  const bottomRight = {...vertical};
  topLeft.opacity = lit.includes('topLeft') ? 1 : 0.1;
  topRight.opacity = lit.includes('topRight') ? 1 : 0.1;
  bottomLeft.opacity = lit.includes('bottomLeft') ? 1 : 0.1;
  bottomRight.opacity = lit.includes('bottomRight') ? 1 : 0.1;
  
  const frog = {
    color: 'green',
    fontWeight: 'bolder',
  };
  
  const ribbit = {
    fontSize: '2em',
    fontWeight: 'bolder',
  };

  const container = {
    margin: '2em',
  };

  return (
    <div style={container}>
      {countdown && <div>
        <div style={top}></div>
        <div style={verticalContainer}>
          <div style={topLeft}></div>
          <div style={topRight}></div>
        </div>
        <div style={middle}></div>
        <div style={verticalContainer}>
          <div style={bottomLeft}></div>
          <div style={bottomRight}></div>
        </div>
        <div style={bottom}></div>
      </div>}
      {!countdown && <div>
        <pre style={ribbit}>       Ribbit</pre>
        <pre style={frog}>       ____  __.---&quot;&quot;---.__  ____ </pre>
        <pre style={frog}>      /####\/              \/####\</pre>
        <pre style={frog}>     (   /\ )              ( /\   )</pre>
        <pre style={frog}>     \____/                \____/</pre>
        <pre style={frog}>    __/                          \__</pre>
        <pre style={frog}> .-&quot;    .                      .    &quot;-.</pre>
        <pre style={frog}> |  |   \.._                _../   |  |</pre>
        <pre style={frog}>  \  \    \.&quot;-.__________.-&quot;./    /  /</pre>
        <pre style={frog}>    \  \    &quot;--.________.--&quot;    /  /</pre>
        <pre style={frog}>  ___\  \_                    _/  /___</pre>
        <pre style={frog}>./    )))))                  (((((    \.</pre>
        <pre style={frog}>\                                      /</pre>
        <pre style={frog}> \           \_          _/           /</pre>
        <pre style={frog}>   \    \____/&quot;&quot;-.____.-&quot;&quot;\____/    /</pre>
        <pre style={frog}>     \    \                  /    /</pre>
        <pre style={frog}>      \.  .|                |.  ./</pre>
        <pre style={frog}>    .&quot; / |  \              /  | \  &quot;.</pre>
        <pre style={frog}> .&quot;  /   |   \            /   |   \   &quot;.</pre>
        <pre style={frog}>/.-./.--.|.--.\          /.--.|.--.\.-.|</pre>
      </div>}
    </div>
  );
};

export default function App() {
  const [color] = useState('red');
  const [lit, setLit] = useState(true);

  setTimeout(() => {
    lit ? setLit(false) : setLit(true);
  }, 1000);

  return (
    <Lamp lit={lit} color={color}/>
  );
}
