import { useState, useEffect, type ReactNode } from 'react'
import { RouterContext } from './RouterContext'
import type { RouteConfig } from './types'

interface RouterProps {
    routes: RouteConfig[]
    children?: ReactNode
}

export function Router({ routes }: RouterProps) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])

    const navigate = (path: string) => {
        window.history.pushState({}, '', path)
        setCurrentPath(path)
    }

    const currentRoute = routes.find(r => r.path === currentPath) || routes[0]
    const Component = currentRoute.component
    const Layout = currentRoute.layout

    return (
        <RouterContext.Provider value={{ currentPath, navigate }}>
            {Layout ? (
                <Layout>
                    <Component />
                </Layout>
            ) : (
                <Component />
            )}
        </RouterContext.Provider>
    )
}