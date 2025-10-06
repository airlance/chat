import { createContext, useContext } from 'react'
import type { RouterContextType } from './types'

export const RouterContext = createContext<RouterContextType | null>(null)

export const useRouter = () => {
    const ctx = useContext(RouterContext)
    if (!ctx) throw new Error('useRouter must be used within Router')
    return ctx
}