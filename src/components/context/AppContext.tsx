'use client'
import { AppContextInterface, BlogEntryData } from 'types/blog-data'
import { createContext, useEffect, useState } from 'react'
import entries_data from '../../../public/blog-entries.json'

export const AppContext = createContext({} as AppContextInterface)

export const AppContextProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [entries, setEntries] = useState(entries_data as BlogEntryData[])

    const addEntry = (entry: BlogEntryData) => {
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
    useEffect(() => {
        console.log('AppContextProvider init')
    }, [])
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
