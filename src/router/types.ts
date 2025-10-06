import type { ReactNode, ComponentType } from 'react'

export interface RouteConfig {
    path: string
    component: ComponentType
    layout?: ComponentType<{ children: ReactNode }>
}

export interface RouterContextType {
    currentPath: string
    navigate: (path: string) => void
}