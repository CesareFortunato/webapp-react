import { Outlet } from "react-router-dom"
import MainHeader from "../components/MainHeader"

const DefaultLayout = () => {
return (
    <>
    <MainHeader />
    <Outlet />
    </>
)
}

export default DefaultLayout 