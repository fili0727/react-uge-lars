import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";
import EventDemo from "./exercises/EventDemo";
import FormUncontrolled from "./exercises/FormUncontrolled";
import StateDemo1 from "./exercises/StateDemo1";
import StateDemo2 from "./exercises/StateDemo2";
import StateDemo3 from "./exercises/StateDemo3";
import UseEffectDemo from "./exercises/UseEffect";
import FetchDemo from "./exercises/FetchDemo";
import LiftingState from "./exercises/LiftingState";
import ContextDemoApp from "./exercises/ContextDemo";


export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView === "info" ? <p>All exercises for React day-1</p> : null}
            {selectedView === "props1" ? <PropsDemo title="Props1" /> : null}
            {selectedView === "ListDemo" ? <ListDemo title="ListDemo" /> : null}
            {selectedView === "EventDemo" ? <EventDemo title="EventDemo" /> : null}
            {selectedView === "Form" ? <FormUncontrolled title="Form" /> : null}
            {selectedView === "State1" ? <StateDemo1 title="State1" /> : null}
            {selectedView === "State2" ? <StateDemo2 title="State2" /> : null}
            {selectedView === "State3" ? <StateDemo3 title="State3" /> : null}
            {selectedView === "useEffect" ? <UseEffectDemo title="UseEffect" /> : null}
            {selectedView === "fetch" ? <FetchDemo title="Fetch" /> : null}
           {selectedView === "liftingState" ? <LiftingState title="liftingState" /> : null}
           {selectedView === "context" ? <ContextDemoApp title="Context" /> : null}
            {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
          </div>
        </div>
      </div>
    </>
  );
  }
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected } = props;
  return (
    <>
      <button className="btn-w100" onClick={() => handleSelected("info")}>
        Info
      </button>
      {/* Add a new button for each of the exercises you complete */}
      <button className="btn-w100" onClick={() => handleSelected("props1")}>
        Props demo1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("ListDemo")}> 
        List demo2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("EventDemo")}>
        Event demo
      </button>
      <button className="btn-w100" onClick={() => handleSelected("Form")}>
        Form Uncontrolled
      </button>
      <button className="btn-w100" onClick={() => handleSelected("State1")}>
        Use state 1
      </button>
      <button className="btn-w100" onClick={() => handleSelected("State2")}>
        Use state 2
      </button>
      <button className="btn-w100" onClick={() => handleSelected("State3")}>
        Use state 3
      </button>
      <button className="btn-w100" onClick={() => handleSelected("useEffect")}>
        UseEffect
      </button>
      <button className="btn-w100" onClick={() => handleSelected("fetch")}>
        Fetch
      </button>
      <button className="btn-w100" onClick={() => handleSelected("liftingState")}>
        Lifting State
      </button>
      <button className="btn-w100" onClick={() => handleSelected("context")}>
        Context
      </button>
    </>
      
  );
};