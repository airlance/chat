import type { RouteConfig } from './router/types'
import { AuthLayout } from "./layouts/AuthLayout.tsx";
import { MainLayout } from './layouts/MainLayout'
import { LoginPage } from './pages/LoginPage'
import { HomePage } from './pages/HomePage'

export const routes: RouteConfig[] = [
    {
        path: '/login',
        component: LoginPage,
        layout: AuthLayout
    },
    {
        path: '/home',
        component: HomePage,
        layout: MainLayout
    },
    {
        path: '/',
        component: LoginPage,
        layout: AuthLayout
    }
]