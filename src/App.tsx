import Home from './Screens/Home';
import CreatePost from './Screens/CreatePost';
import Navbar from './Screens/Navbar';
import React from 'react'; 
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container-fulid'>
      <CreatePost/>
      <Home></Home>
      </div>


    </React.Fragment> 
  );
}

export default App;
