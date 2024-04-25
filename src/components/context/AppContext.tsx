'use client'
import { AppContextInterface, BlogDBEntry } from 'types/blog-data'
import { createContext, useEffect, useState } from 'react'
import entries_data from '../../../public/blog-entries.json'

export const AppContext = createContext({} as AppContextInterface)

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [entries, setEntries] = useState(entries_data as BlogDBEntry[])

    const addEntry = (entry: BlogDBEntry) => {
        setEntries((prev) => {
            const updateEntries = [...prev]
            updateEntries.push(entry)
            console.log({ prev, updateEntries })
            return updateEntries
        })
        console.log({ entries })
    }

    const contextValue = {
        entries,
        addEntry,
    }
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
