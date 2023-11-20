"use client"

import ResponseContextProvider from "./ResponseContextProvider"

function Providers({ children }) {
    return (
        <ResponseContextProvider>
            {children}
        </ResponseContextProvider>
    )
}
export default Providers

