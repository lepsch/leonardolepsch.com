import type { Gallery } from "./Gallery"

const _01 = "/images/mills-flour/01.jpg"
const _02 = "/images/mills-flour/02.jpg"
const _03 = "/images/mills-flour/03.jpg"
const _04 = "/images/mills-flour/04.jpg"
const _05 = "/images/mills-flour/05.jpg"
const _06 = "/images/mills-flour/06.jpg"
const _07 = "/images/mills-flour/07.jpg"
const _08 = "/images/mills-flour/08.jpg"

const _01_t = "/images/mills-flour/thumbnails/01.jpg"
const _02_t = "/images/mills-flour/thumbnails/02.jpg"
const _03_t = "/images/mills-flour/thumbnails/03.jpg"
const _04_t = "/images/mills-flour/thumbnails/04.jpg"
const _05_t = "/images/mills-flour/thumbnails/05.jpg"
const _06_t = "/images/mills-flour/thumbnails/06.jpg"
const _07_t = "/images/mills-flour/thumbnails/07.jpg"
const _08_t = "/images/mills-flour/thumbnails/08.jpg"

const images: Gallery["images"] = [
  {
    original: _01,
    thumbnail: _01_t,
  },
  {
    original: _02,
    thumbnail: _02_t,
  },
  {
    original: _03,
    thumbnail: _03_t,
  },
  {
    original: _04,
    thumbnail: _04_t,
  },
  {
    original: _05,
    thumbnail: _05_t,
  },
  {
    original: _06,
    thumbnail: _06_t,
  },
  {
    original: _07,
    thumbnail: _07_t,
  },
  {
    original: _08,
    thumbnail: _08_t,
  },
]

const gallery = {
  id: "mills-flour",
  images,
  title: "Mill's Flour",
} as const satisfies Gallery

export default gallery
