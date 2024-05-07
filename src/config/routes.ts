import Home from "../pages/Home"
import Info from "../pages/Info"
import Dashboard from "../pages/Dashboard"

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
}

const routes: any = [
    {
        path: "",
        component: Home,
        name: "Home"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    },
    {
        path: "/info",
        component: Info,
        name: "Info"
    },
]

export default routes