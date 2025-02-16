import { FC, Fragment, ReactElement } from "react"
import { Outlet } from "react-router"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"

const MainLayout: FC = (): ReactElement => {
  return (
    <Fragment>
      <div className="main-background" />
      <header className="header">
        <Navbar />
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </Fragment>
  )
}

export default MainLayout