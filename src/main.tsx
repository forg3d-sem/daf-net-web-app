import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf'
import './main.css'
import './styles/global.scss'

// Import the generated route tree
import {routeTree} from './routeTree.gen'
import ToastProvider from "./Components/ToastComponents/ToastProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./store/store.ts";


// Create a new router instance
const router = createRouter({routeTree})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const queryClient = new QueryClient()

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <StrictMode>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ToastProvider>
                        <RouterProvider router={router}/>
                    </ToastProvider>
                    <ReactQueryDevtools initialIsOpen={false}/>
                </QueryClientProvider>
            </Provider>
        </StrictMode>,
    )
}