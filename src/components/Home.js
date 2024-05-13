import React,{useEffect} from 'react'
import {useSelector } from 'react-redux';


const Home = ({setProgress}) => {
  const mode = useSelector((state) => {
    return state.user;
})
  useEffect((() =>{
    setProgress(40);
    setTimeout(()=>{
      setProgress(100)
    },200)
    
  }),[setProgress])
  return (
    <>
      <section className='heading'>
        {/* <h1 style={{color:mode.darkMode.setDark?mode.darkMode.textLight:mode.darkMode.textDark}}>Patient appointment App</h1>
        <h2 style={{color:mode.darkMode.setDark?mode.darkMode.textLight:mode.darkMode.textDark}}>Book your appointment with us!</h2> */}
      </section>
      <section>
      </section>

    </>
  )
}

export default Home