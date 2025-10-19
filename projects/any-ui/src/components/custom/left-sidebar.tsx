import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { Sidebar } from '../ui/sidebar';

type LeftSideBarProps = {
    className?: string;
}

const LeftSideBar = ({className}: LeftSideBarProps) => {

  return (
    <Sidebar className={cn("", className)} collapsible='icon' side='left'>
    </Sidebar>
  )
}

export default LeftSideBar  