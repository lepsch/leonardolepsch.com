import galleries, { type GalleryId } from "./galleries"

export const canonicalPath = {
  home: "/",
  contact: "/contact",
  ...galleries.reduce<Record<GalleryId, (options: { page: number; photoIndex?: number | undefined }) => string>>(
    (result, { id }) => ({
      ...result,
      [id]: ({ page, photoIndex }: { page: number; photoIndex?: number }) =>
        `/${id}/${page}${typeof photoIndex === "number" ? `/${photoIndex}` : ""}`,
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/no-explicit-any
    {} as any,
  ),
}

export type CanonicalPath = keyof typeof canonicalPath
