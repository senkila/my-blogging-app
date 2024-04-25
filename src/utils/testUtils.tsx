import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppContextProvider } from '../components'

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return <AppContextProvider>{children}</AppContextProvider>
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
