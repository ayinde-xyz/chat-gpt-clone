"use client"
import React from 'react'
import { useProSidebar } from 'react-pro-sidebar'
import { Bars3Icon } from '@heroicons/react/24/solid'

const ToggleButton = () => {
    const {collapseSidebar ,toggleSidebar, toggled} = useProSidebar()
    
  
    const toggle = () => {
      toggleSidebar()
      if (toggled) {
        collapseSidebar()
      } else {
        collapseSidebar()
      }
    }
    return (
      <Bars3Icon className="block h-10 w-10 text-white" onClick={() => toggle()}/>
    
    )
  
}

export default ToggleButton