import outdent from "outdent"
import type { Gallery } from "./Gallery"

const _01 = "/images/portugal-pequeno/01.jpg"
const _02 = "/images/portugal-pequeno/02.jpg"
const _03 = "/images/portugal-pequeno/03.jpg"
const _04 = "/images/portugal-pequeno/04.jpg"
const _05 = "/images/portugal-pequeno/05.jpg"
const _06 = "/images/portugal-pequeno/06.jpg"
const _07 = "/images/portugal-pequeno/07.jpg"
const _08 = "/images/portugal-pequeno/08.jpg"
const _09 = "/images/portugal-pequeno/09.jpg"
const _10 = "/images/portugal-pequeno/10.jpg"
const _11 = "/images/portugal-pequeno/11.jpg"
const _12 = "/images/portugal-pequeno/12.jpg"
const _13 = "/images/portugal-pequeno/13.jpg"

const _01_t = "/images/portugal-pequeno/thumbnails/01.jpg"
const _02_t = "/images/portugal-pequeno/thumbnails/02.jpg"
const _03_t = "/images/portugal-pequeno/thumbnails/03.jpg"
const _04_t = "/images/portugal-pequeno/thumbnails/04.jpg"
const _05_t = "/images/portugal-pequeno/thumbnails/05.jpg"
const _06_t = "/images/portugal-pequeno/thumbnails/06.jpg"
const _07_t = "/images/portugal-pequeno/thumbnails/07.jpg"
const _08_t = "/images/portugal-pequeno/thumbnails/08.jpg"
const _09_t = "/images/portugal-pequeno/thumbnails/09.jpg"
const _10_t = "/images/portugal-pequeno/thumbnails/10.jpg"
const _11_t = "/images/portugal-pequeno/thumbnails/11.jpg"
const _12_t = "/images/portugal-pequeno/thumbnails/12.jpg"
const _13_t = "/images/portugal-pequeno/thumbnails/13.jpg"

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
]

const gallery = {
  id: "portugal-pequeno",
  images,
  title: "Portugal Pequeno",
  text: outdent`
    Portugal Pequeno é um local histórico em Niterói, no Rio de Janeiro, que recebeu este nome devido à presença de uma colônia de portugueses.
  `,
} as const satisfies Gallery

export default gallery
