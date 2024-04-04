'use client'
import { AppContextInterface, BlogEntry } from 'types/blog-data'
import { createContext, useEffect, useState } from 'react'
import entries_data from '../../../public/blog-entries.json'

export const AppContext = createContext({} as AppContextInterface)

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [entries, setEntries] = useState(entries_data as BlogEntry[])

    const addEntry = (entry: BlogEntry) => {
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
    useEffect(() => {
        console.log({ entries })
    }, [entries])
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
