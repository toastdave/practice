import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { Sidebar } from '../ui/sidebar';

type RightSidebarProps = {
    className?: string;
}

const RightSidebar = ({className}: RightSidebarProps) => {

  return (
    <Sidebar className={cn("", className)} collapsible='offcanvas' side='right'>
    </Sidebar>
  )
}

export default RightSidebar  