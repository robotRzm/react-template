import React from 'react';
import {
  Outlet,
  Link
} from 'react-router-dom';
import './app.less';

const App = () => {
  return (
    <div className='app'>
      hello React ! ! !
      <br />
      <Link to='home'>home</Link>
      <br />
      <Link to='about/123'>about</Link>
      <br />
      <Outlet />
    </div>
  );
};

export default App;