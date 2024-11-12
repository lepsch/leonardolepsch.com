import { Link, type MetaFunction } from "react-router"
import { canonicalPath } from "../canonical-path"
import { BASE_URL } from "../constants"

export const meta: MetaFunction = () => {
  return [
    {
      tagName: "link",
      rel: "canonical",
      href: `${BASE_URL}${canonicalPath.contact}`,
    },
  ]
}

export default function Home() {
  return (
    <div className="cover contact">
      <div className="contact">
        <Link to="mailto:lepschleonardo@gmail.com">lepschleonardo@gmail.com</Link>
      </div>
    </div>
  )
}
