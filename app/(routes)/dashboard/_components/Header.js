import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div>
        <UserButton/>
        <OrganizationSwitcher afterCreateOrganizationUrl={"/dashboard"} 
        afterLeaveOrganizationUrl={"/dashboard"}/>
    </div>
  )
}

export default Header