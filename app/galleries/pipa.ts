import type { Gallery } from "./Gallery"

const _0 = "/images/pipa/0.jpg"
const _01 = "/images/pipa/01.jpg"
const _02 = "/images/pipa/02.jpg"
const _03 = "/images/pipa/03.jpg"
const _04 = "/images/pipa/04.jpg"
const _05 = "/images/pipa/05.jpg"
const _06 = "/images/pipa/06.jpg"
const _07 = "/images/pipa/07.jpg"
const _08 = "/images/pipa/08.jpg"
const _09 = "/images/pipa/09.jpg"
const _10 = "/images/pipa/10.jpg"
const _11 = "/images/pipa/11.jpg"
const _12 = "/images/pipa/12.jpg"
const _13 = "/images/pipa/13.jpg"
const _14 = "/images/pipa/14.jpg"
const _15 = "/images/pipa/15.jpg"
const _16 = "/images/pipa/16.jpg"

const _0_t = "/images/pipa/thumbnails/0.jpg"
const _01_t = "/images/pipa/thumbnails/01.jpg"
const _02_t = "/images/pipa/thumbnails/02.jpg"
const _03_t = "/images/pipa/thumbnails/03.jpg"
const _04_t = "/images/pipa/thumbnails/04.jpg"
const _05_t = "/images/pipa/thumbnails/05.jpg"
const _06_t = "/images/pipa/thumbnails/06.jpg"
const _07_t = "/images/pipa/thumbnails/07.jpg"
const _08_t = "/images/pipa/thumbnails/08.jpg"
const _09_t = "/images/pipa/thumbnails/09.jpg"
const _10_t = "/images/pipa/thumbnails/10.jpg"
const _11_t = "/images/pipa/thumbnails/11.jpg"
const _12_t = "/images/pipa/thumbnails/12.jpg"
const _13_t = "/images/pipa/thumbnails/13.jpg"
const _14_t = "/images/pipa/thumbnails/14.jpg"
const _15_t = "/images/pipa/thumbnails/15.jpg"
const _16_t = "/images/pipa/thumbnails/16.jpg"

const images: Gallery["images"] = [
  {
    original: _0,
    thumbnail: _0_t,
  },
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
  {
    original: _09,
    thumbnail: _09_t,
  },
  {
    original: _10,
    thumbnail: _10_t,
  },
  {
    original: _11,
    thumbnail: _11_t,
  },
  {
    original: _12,
    thumbnail: _12_t,
  },
  {
    original: _13,
    thumbnail: _13_t,
  },
  {
    original: _14,
    thumbnail: _14_t,
  },
  {
    original: _15,
    thumbnail: _15_t,
  },
  {
    original: _16,
    thumbnail: _16_t,
  },
]

const gallery = {
  id: "pipa",
  images,
  title: "Pipa",
} as const satisfies Gallery

export default gallery
