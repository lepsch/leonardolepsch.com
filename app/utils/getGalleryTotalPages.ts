import { IMAGES_PER_PAGE } from "../constants"
import type { Gallery } from "../galleries"

export const getGalleryTotalPages = ({ images }: Gallery) =>
  Math.floor(images.length / IMAGES_PER_PAGE) + (images.length % IMAGES_PER_PAGE > 0 ? 1 : 0)
