import type { Config } from "@react-router/dev/config"
import galleries from "./app/galleries"
import { canonicalPath } from "./app/canonical-path"
import { getGalleryTotalPages } from "./app/utils"
import { IMAGES_PER_PAGE } from "./app/constants"

const dynamicRoutes = [
  ...galleries.flatMap((gallery) =>
    Array.from({ length: getGalleryTotalPages(gallery) }).flatMap((_, page) => [
      canonicalPath[gallery.id](),
      canonicalPath[gallery.id]({ page }),
      ...Array.from({ length: IMAGES_PER_PAGE }).map((_, photoIndex) =>
        canonicalPath[gallery.id]({ page, photoIndex: page * IMAGES_PER_PAGE + photoIndex }),
      ),
    ]),
  ),
]

export default {
  prerender: ({ getStaticPaths }) => [...getStaticPaths(), ...dynamicRoutes],
} satisfies Config
