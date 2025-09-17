import React, { useState } from 'react'

import { cn } from '@/lib/utils'

type LeftSideBarProps = {
    className?: string;
}

const LeftSideBar = ({className}: LeftSideBarProps) => {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <aside className={cn("bg-accent h-dvh", className, isOpen ? "w-48" : "w-12")}>
        <div className='w-full flex justify-end'><span className='bg-background relative left-14 rounded border-2' onClick={() => setIsOpen(!isOpen)}>toasts</span></div>
        
    </aside>
  )
}

export default LeftSideBar  