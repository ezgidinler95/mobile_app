
import React from 'react';
import  Card from './src/components/Card';
import Login from './src/pages/Login';
import FlatList from './src/pages/FlatList';


const App: () => React$Node = () => {
  return (
    <>
    {/* <Login/> */}
    <FlatList></FlatList>
    </>
  );
};

export default App;
