import { Outlet } from "react-router";

import React from 'react'

const RootLayout = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default RootLayout