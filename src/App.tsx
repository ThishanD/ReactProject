import Home from './Screens/Home';
import CreatePost from './Screens/CreatePost';
import Navbar from './Screens/Navbar';
import React from 'react'; 
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <CreatePost/>

    </React.Fragment> 
  );
}

export default App;
