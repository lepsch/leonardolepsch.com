/* slint-disable @typescript-eslint/restrict-template-expressions */
import { Link, type LoaderFunctionArgs, type MetaFunction, useLoaderData } from "react-router"
import { canonicalPath } from "../canonical-path"
import { BASE_URL, IMAGES_PER_PAGE } from "../constants"
import galleries, { type Gallery, type GalleryId } from "../galleries"
import { getGalleryTotalPages } from "../utils"
import "./gallery.scss"

const PREVIOUS_LABEL = "Previous"
const NEXT_LABEL = "Next"

export const loader = ({ params }: LoaderFunctionArgs) => {
  const galleryId = params["galleryId"] as GalleryId | undefined
  const gallery = galleries.find((gallery) => gallery.id === galleryId)
  // eslint-disable-next-line @typescript-eslint/only-throw-error
  if (!galleryId || !gallery) throw { statusCode: 404, statusText: "Gallery not found" }

  const photoIndexParam = params["photoIndex"]
  const photoIndex = photoIndexParam ? parseInt(photoIndexParam) : null
  const pageParam = params["pageIndex"]
  const page = (pageParam ? parseInt(pageParam) : undefined) || 0

  return { galleryId, photoIndex, page }
}

export const meta: MetaFunction<typeof loader> = ({ data }) => [
  ...(data
    ? [
        {
          tagName: "link",
          rel: "canonical",
          href: `${BASE_URL}${canonicalPath[data.galleryId](data)}`,
        },
      ]
    : []),
]

export default function Gallery() {
  const { galleryId, photoIndex, page } = useLoaderData<typeof loader>()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const gallery = galleries.find((gallery) => gallery.id === galleryId)! as Gallery
  const { images, title, subtitle } = gallery

  const totalPages = getGalleryTotalPages(gallery)
  const pageImages = images.slice(page * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE + IMAGES_PER_PAGE)

  return (
    <>
      <main className="main">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="gallery">
          <ul className="thumbnails">
            {pageImages.map((image, index) => (
              <li className="thumbnail" key={index}>
                <Link
                  to={canonicalPath[galleryId]({
                    page: Math.floor((index + page * IMAGES_PER_PAGE) / IMAGES_PER_PAGE),
                    photoIndex: index + page * IMAGES_PER_PAGE,
                  })}
                >
                  <div>
                    <img src={image.thumbnail} alt="" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          {totalPages > 1 && (
            <ul className="pages">
              {[...Array.from({ length: totalPages })].map((_, index) => (
                <li className={`page${page === index ? " active" : ""}`} key={index}>
                  {page === index ? index + 1 : <Link to={canonicalPath[galleryId]({ page: index })}>{index + 1}</Link>}
                </li>
              ))}
              <li className="page previous">
                {page > 0 ? (
                  <Link to={canonicalPath[galleryId]({ page: page - 1 })}>{PREVIOUS_LABEL}</Link>
                ) : (
                  PREVIOUS_LABEL
                )}
              </li>
              <li className="page next">
                {page + 1 < totalPages ? (
                  <Link to={canonicalPath[galleryId]({ page: page + 1 })}>{NEXT_LABEL}</Link>
                ) : (
                  NEXT_LABEL
                )}
              </li>
            </ul>
          )}
        </div>
      </main>
      {typeof photoIndex === "number" && (
        <div className="modal">
          <div className="content">
            <Link to={canonicalPath[galleryId]({ page })}>
              <div className="outer">
                <div className="inner">
                  <div className="frame">
                    <img src={images[photoIndex]?.original} alt="" />
                    <div className="description">
                      {images[photoIndex]?.description?.split("\n").map((text) => (
                        <>
                          {text}
                          <br />
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
