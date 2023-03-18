import React from 'react'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
import ToggleButton from '../components/ToggleButton'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='text-white flex flex-col my-8 items-center justify-center min-h-screen px-2'>
      <div className='fixed top-0 left-0'>
      <ToggleButton/>
      </div>
      
      <h1 className='text-3xl md:text-5xl font-bold mb-20 animate-pulse'>ChatGPT messenger</h1>


      <div className='md:space-x-2 space-y-2 flex flex-col md:flex-row m-auto text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            
            <SunIcon className='h-8 w-8' />
            <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
          <p className='infoText'>"Explain quantum computing in simple terms"</p>
          <p className='infoText'>"Got any creative ideas for a 10 year old’s birthday?"</p>
          <p className='infoText'>"How do I make an HTTP request in Javascript?"</p>
          </div>
        </div>
      

      
      
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            
            <BoltIcon className='h-8 w-8' />
            <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
          <p className='infoText'>"Remembers what user said earlier in the conversation"</p>
          <p className='infoText'>"Allows user to provide follow-up corrections"</p>
          <p className='infoText'>"Trained to decline inappropriate requests"</p>
          </div>
        </div>
      

      
     
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            {/* Sun Icon */}
            <ExclamationTriangleIcon className='h-8 w-8' />
            <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
          <p className='infoText'>"May occasionally generate incorrect information"</p>
          <p className='infoText'>"May occasionally produce harmful instructions or biased content"</p>
          <p className='infoText'>"Limited knowledge of world and events after 2021"</p>
          </div>
        </div>
        </div>
    </div>
    
  )
}

export default HomePage