import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import AccordionRadio from './components/AccordionRadio';
import AccordionRadioItem from './components/AccordionRadioItem';
import AccordionRadioContent from './components/AccordionRadioContent';

const label = [<span>This is a label</span>, <span>And it is split!</span>];

const MyApp = (
  <AccordionRadio
    name="myField"
    onChangeHandler={e => {
      {
        /* console.log(e); */
      }
    }}>
    <AccordionRadioItem label={label} value="first">
      <AccordionRadioContent>
        Omg, where did all this content come from?
      </AccordionRadioContent>
    </AccordionRadioItem>
    <AccordionRadioItem
      label={<span>This one only has one label</span>}
      value="second">
      <AccordionRadioContent>Look! More content!</AccordionRadioContent>
    </AccordionRadioItem>
  </AccordionRadio>
);

// Render the main component into the dom
ReactDOM.render(MyApp, document.getElementById('app'));
