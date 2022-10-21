import React from 'react';
import {
  Outlet, 
  Link,
  useSearchParams
} from 'react-router-dom';
import './App.less';

const App = () => {
  const [urlSearchParams] = useSearchParams();
  console.log(urlSearchParams.get("aa"))
  return (
    <div className='app'>
      hello React
      <br />
      <Link to='home'>home</Link>
      <br />
      <Link to='about'>about</Link>
      <br />
      <Outlet />
    </div>

  );
};

export default App;