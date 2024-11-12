import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  type LinksFunction,
  type MetaFunction,
} from "react-router"
import { BASE_URL, DOMAIN } from "./constants"

import "normalize.css"
import "./app.css"

export const loader = () => {
  return {
    updatedTime: new Date().toISOString(),
  }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  ...(data ? [{ property: "og:updated_time", content: data.updatedTime }] : []),
]

const title = "Leonardo Lepsch"
const subtitle = "Heart Given Photography"
const description =
  "Capturing raw beauty and emotion, my photography brings unforgettable moments to life with striking, impactful portraits and evocative storytelling."
const ogImage = `${BASE_URL}/images/pipa/08.jpg`

export const links: LinksFunction = () => [{ rel: "icon", href: "/favicon.ico" }]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{`${title} - ${subtitle}`}</title>
        <meta name="description" content={description} />

        <meta name="theme-color" content="#1F1F1F" />
        <meta content={title} name="application-name" />
        <meta content="yes" name="mobile-web-app-capable" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="black-translucent" name="apple-mobile-web-app-status-bar-style" />
        <meta content={title} name="apple-mobile-web-app-title" />
        <meta content="#1F1F1F" name="msapplication-TileColor" />
        <meta content={ogImage} name="msapplication-TileImage" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={DOMAIN} />
        <meta property="twitter:url" content={BASE_URL} />
        <meta name="twitter:title" content={`${title} - ${subtitle}`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${title} - ${subtitle}`} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="402" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content={`${title} - ${subtitle}`} />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${title} - ${subtitle}`} />
        <meta property="og:description" content={description} />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script src="/tarteaucitronjs/tarteaucitron.min.js"></script>
        <script src={TARTEAUCITRON_INIT_URL} />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html:
              'tarteaucitron.user.gtagUa = "G-E0T02FHVP2"; (tarteaucitron.job = tarteaucitron.job || []).push("gtag");',
          }}
        ></script>
        <Meta />
        <Links />
      </head>
      <body>
        <Link className="home" to="/">
          <h1>leonardo lepsch</h1>
        </Link>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
