import galleries, { type GalleryId } from "./galleries"

export const canonicalPath = {
  home: "/",
  contact: "/contact",
  ...galleries.reduce<
    Record<GalleryId, (options?: { page?: number; photoIndex?: number | undefined | null }) => string>
  >(
    (result, { id }) => ({
      ...result,
      [id]: ({ page, photoIndex }: { page?: number; photoIndex?: number } = {}) =>
        ["", id, typeof page === "number" ? `${page}` : false, typeof photoIndex === "number" ? `${photoIndex}` : false]
          .filter((x) => typeof x === "string")
          .join("/"),
    }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/prefer-reduce-type-parameter, @typescript-eslint/no-explicit-any
    {} as any,
  ),
}

export type CanonicalPath = keyof typeof canonicalPath
