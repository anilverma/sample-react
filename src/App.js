import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome  from "./components/Welcome";
import Message from './components/Message.js';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
function App() {
  return (
    <div className="App">
        <Greet name="Anil">
            <h3>This is children props.name</h3>
        </Greet>
        <Welcome name="Anil"></Welcome>
        <Message />
        <FunctionClick/>
        <ClassClick/>
        <EventBind/>
        <ParentComponent/>
    </div>
    
  );
}

export default App;
