import { type MetaFunction } from "react-router"
import { canonicalPath } from "../canonical-path"
import { BASE_URL } from "../constants"

export const meta: MetaFunction = () => {
  return [
    {
      tagName: "link",
      rel: "canonical",
      href: `${BASE_URL}${canonicalPath.home}`,
    },
  ]
}

export default function Home() {
  return <div className="cover main" />
}
