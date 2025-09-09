import { useState } from 'react'
import { animate, motion } from 'motion/react'
import ScrollBasedAnimations from './components/ScrollBasedAnimations'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <motion.div className='container'
      // whileHover={{x:500}}
      animate={{x:600}}
      transition={{duration : 1, repeat : Infinity, ease : 'anticipate'}}>

        {/* <motion.button className='button' initial={{ scale: 0 }} animate={{ scale: 1, transition : {duration : 0.3} }} whileHover={{scale : 1.1}} whileTap={{scale : 0.95}} >
          Hello
        </motion.button> */}

      {/* </motion.div> */}

      {/* <motion.img src='/car.png' width={300} height={300}
        initial={{
          x: 0,
          y: 0
        }}
        drag

        // whileTap={{ scale: 0.8 }}
        whileDrag={{ scale: 2 }}

        dragConstraints={{
          left:0,
          top:0, 
          right:1000,
          bottom:100
        }}
        dragDirectionLock='true'
        // whileHover={{ scale: 1.1 }}

        // whileHover={{
        //   x:[0, 500, 500, 0, 0],
        //   y:[0, 0, 300, 300, 0],
        //   rotate:[0, 360, 0, 200, 180]

        // }}
        transition={{ duration: 0.1 }}

      />
      <motion.div className='container'>
        Hello
      </motion.div> */}

      <ScrollBasedAnimations/>
    </>
  )
}

export default App
