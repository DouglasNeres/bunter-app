
import { NavMobileProvider } from "./NavMobileContexts";
import React from "react";

export * from './NavMobileContexts'

export function AppContexts({children}: {children:React.ReactNode}) {
  return(
    <>
    <NavMobileProvider>{children}</NavMobileProvider> 
    </>
  )
}