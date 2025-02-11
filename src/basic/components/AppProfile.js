import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avartar';
import { useState } from 'react';


function AppProfile() {
  const handleClick = (event) => {
    alert('클릭됨');
  };
  return (
    <>
    <button onClick={handleClick}>버튼</button>
    <form onSubmit={() => {}}>
      <input></input>
    </form>
    <Avartar image='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    isNew={true}
    />
    <Profile image='https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    name='James Kim'
    title='프론트엔드 개발자'
    isNew={true} 
    />
    <Profile image='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlDJUEwJUVEJTk2JTg5fGVufDB8fDB8fHww'
    name='Anna Kim'
    title='프론트엔드 개발자' />
    <Profile image='https://plus.unsplash.com/premium_photo-1683121263622-664434494177?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    name='Young' 
    title='프론트엔드 개발자' />
    </>
  )
}

export default AppProfile;
