import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '@/store/home';

const Home = () => {
  const home = useSelector(state => state.home);
  const dispatch = useDispatch();

  return (<>
    <hr />
    <div>Home Content!!!</div>
    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    <div>num：{home.value}</div>
  </>);
};

export default Home;
