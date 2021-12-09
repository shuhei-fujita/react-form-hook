import { Grid } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import Content from './components/Content';

function App() {
  return (
    <Grid container direction="column">
      <div style={{ padding: 30 }}>
        <Content />
      </div>
    </Grid>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     {/* <Contact /> */}
    //   </header>
    // </div>
  );
}

export default App;
