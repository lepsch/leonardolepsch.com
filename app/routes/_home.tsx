import { Link, Outlet } from "react-router"
import { canonicalPath } from "../canonical-path"
import galleries from "../galleries"

export default function Home() {
  return (
    <main className="mainpage">
      <div className="content">
        <ul className="menu">
          {galleries.map((gallery) => (
            <li key={gallery.id}>
              <Link to={`/${gallery.id}`}>{gallery.title}</Link>
            </li>
          ))}
          <li className="contact-menu">
            <Link to={canonicalPath.contact}>Contact</Link>
          </li>
        </ul>
        <Outlet />
      </div>
      <div className="designer">
        <Link to="mailto:stratozell@alice.it">designed by Pavan Andrea</Link>
      </div>
    </main>
  )
}
