import React from 'react';

import { TopNav, SideNav } from './components';

import MainPageRoutes from './mainpageroutes';


function App(props) {
  return (
    <div className="app">
      <TopNav />
      <div className="sidemain">
        <SideNav {...props}/>
        <MainPageRoutes />
      </div>
    </div>
  );
}

export default App;
