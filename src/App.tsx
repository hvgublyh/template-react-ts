import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './App.css';
import SelfTable from './components/selfTable'
import {appData} from './axios/api'

type ReducerState = {
  userState: {
    user: String,
  }
}

function App(this: any) {
  const [value, setValue] = useState(0);
  appData(value).then((res: any) => {
    console.log(res)
  }).catch((err: any) => {
    console.log(err)
  })

  const userState = useSelector((state: ReducerState) => state.userState);
  const dispatch = useDispatch()

  useEffect(() => {
    if (value < 10) {
      dispatch({type: 'login', payload: 'firstUser'})
    }else {
      dispatch({type: 'logout', payload: 'firstUser'})
    }
  }, [value, dispatch])
  return (
    <div className="App">
      {userState.user}
      
      <SelfTable></SelfTable>
      {value}
    </div>
  );
}

export default App;
