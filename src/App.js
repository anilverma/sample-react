import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet.js'
import Welcome  from "./components/Welcome";
import Message from './components/Message.js';
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import Stylesheet from "./components/Stylesheet";
import './appStyle.css';
import styles from './appStyles.module.css';
import Form from "./components/Form";

function App() {
  return (
      <div className="App">
         {/* <h1 className='error'>Error</h1>
          <h1 className={styles.success}>Sucess</h1>
          <Greet name="Anil">
              <h3>This is children props.name</h3>
          </Greet>
          <Welcome name="Anil"></Welcome>
          <Message/>
          <FunctionClick/>
          <ClassClick/>
          <EventBind/>
          <ParentComponent/>
          <Stylesheet primary={true}/>*/}
            <Form/>
      </div>

  );
}

export default App;
