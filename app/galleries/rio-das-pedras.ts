import outdent from "outdent"
import type { Gallery } from "./Gallery"

// const _0 = "/images/rio-das-pedras/0.jpg"
const _01 = "/images/rio-das-pedras/01.jpg"
const _02 = "/images/rio-das-pedras/02.jpg"
const _03 = "/images/rio-das-pedras/03.jpg"
const _04 = "/images/rio-das-pedras/04.jpg"
const _05 = "/images/rio-das-pedras/05.jpg"
const _06 = "/images/rio-das-pedras/06.jpg"
const _07 = "/images/rio-das-pedras/07.jpg"
const _08 = "/images/rio-das-pedras/08.jpg"
const _09 = "/images/rio-das-pedras/09.jpg"
const _10 = "/images/rio-das-pedras/10.jpg"
const _11 = "/images/rio-das-pedras/11.jpg"
const _12 = "/images/rio-das-pedras/12.jpg"
const _13 = "/images/rio-das-pedras/13.jpg"
const _14 = "/images/rio-das-pedras/14.jpg"

// const _0_t = "/images/rio-das-pedras/thumbnails/0.jpg"
const _01_t = "/images/rio-das-pedras/thumbnails/01.jpg"
const _02_t = "/images/rio-das-pedras/thumbnails/02.jpg"
const _03_t = "/images/rio-das-pedras/thumbnails/03.jpg"
const _04_t = "/images/rio-das-pedras/thumbnails/04.jpg"
const _05_t = "/images/rio-das-pedras/thumbnails/05.jpg"
const _06_t = "/images/rio-das-pedras/thumbnails/06.jpg"
const _07_t = "/images/rio-das-pedras/thumbnails/07.jpg"
const _08_t = "/images/rio-das-pedras/thumbnails/08.jpg"
const _09_t = "/images/rio-das-pedras/thumbnails/09.jpg"
const _10_t = "/images/rio-das-pedras/thumbnails/10.jpg"
const _11_t = "/images/rio-das-pedras/thumbnails/11.jpg"
const _12_t = "/images/rio-das-pedras/thumbnails/12.jpg"
const _13_t = "/images/rio-das-pedras/thumbnails/13.jpg"
const _14_t = "/images/rio-das-pedras/thumbnails/14.jpg"

const images: Gallery["images"] = [
  // {
  //   original: _0,
  //   thumbnail: _0_t,
  // },
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
]

const gallery = {
  id: "rio-das-pedras",
  images,
  title: "Rio das Pedras",
  text: outdent`
    Founded in the late sixties, Rio das Pedras has among its singularities the fact of being one of the few slums in Rio de Janeiro capable of inhibiting drug dealing. However, it is controlled by an illegal strict internal system called "milícia" (militia) dictated by an outlaw police force. To which answers with no mercy to any infraction of its imposed law.

    On Father's Day, Sunday of 2006, a fire of big proportions destroyed 500 houses, leaving around 3000 homeless persons. Some of them moved to shelters improvised in a soccer field...
  `,
} as const satisfies Gallery

export default gallery
