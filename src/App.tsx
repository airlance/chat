import { Router } from './router/Router'
import { routes } from './routes'

export default function App() {
    return <Router routes={routes} />
}
