import outdent from "outdent"
import type { Gallery } from "./Gallery"

const _mg_0816 = "/images/burano/_mg_0816.jpg"
const _mg_9114 = "/images/burano/_mg_9114.jpg"
const _mg_8981 = "/images/burano/_mg_8981.jpg"
const _mg_9009 = "/images/burano/_mg_9009.jpg"
const _mg_0779 = "/images/burano/_mg_0779.jpg"
const _mg_8995_copia = "/images/burano/_mg_8995_copia.jpg"
const _mg_9036 = "/images/burano/_mg_9036.jpg"
const _mg_2208 = "/images/burano/_mg_2208.jpg"
const _mg_9196 = "/images/burano/_mg_9196.jpg"
const _mg_2483 = "/images/burano/_mg_2483.jpg"
const _mg_5397 = "/images/burano/_mg_5397.jpg"
const _mg_9074 = "/images/burano/_mg_9074.jpg"
const _mg_0823 = "/images/burano/_mg_0823.jpg"
const _mg_5280 = "/images/burano/_mg_5280.jpg"
const _mg_5469 = "/images/burano/_mg_5469.jpg"
const _mg_5504 = "/images/burano/_mg_5504.jpg"
const _mg_2558 = "/images/burano/_mg_2558.jpg"
const _mg_5587 = "/images/burano/_mg_5587.jpg"
const _mg_9313 = "/images/burano/_mg_9313.jpg"
const _mg_9303 = "/images/burano/_mg_9303.jpg"

const _mg_0816_t = "/images/burano/thumbnails/_mg_0816.jpg"
const _mg_9114_t = "/images/burano/thumbnails/_mg_9114.jpg"
const _mg_8981_t = "/images/burano/thumbnails/_mg_8981.jpg"
const _mg_9009_t = "/images/burano/thumbnails/_mg_9009.jpg"
const _mg_0779_t = "/images/burano/thumbnails/_mg_0779.jpg"
const _mg_8995_copia_t = "/images/burano/thumbnails/_mg_8995_copia.jpg"
const _mg_9036_t = "/images/burano/thumbnails/_mg_9036.jpg"
const _mg_2208_t = "/images/burano/thumbnails/_mg_2208.jpg"
const _mg_9196_t = "/images/burano/thumbnails/_mg_9196.jpg"
const _mg_2483_t = "/images/burano/thumbnails/_mg_2483.jpg"
const _mg_5397_t = "/images/burano/thumbnails/_mg_5397.jpg"
const _mg_9074_t = "/images/burano/thumbnails/_mg_9074.jpg"
const _mg_0823_t = "/images/burano/thumbnails/_mg_0823.jpg"
const _mg_5280_t = "/images/burano/thumbnails/_mg_5280.jpg"
const _mg_5469_t = "/images/burano/thumbnails/_mg_5469.jpg"
const _mg_5504_t = "/images/burano/thumbnails/_mg_5504.jpg"
const _mg_2558_t = "/images/burano/thumbnails/_mg_2558.jpg"
const _mg_5587_t = "/images/burano/thumbnails/_mg_5587.jpg"
const _mg_9313_t = "/images/burano/thumbnails/_mg_9313.jpg"
const _mg_9303_t = "/images/burano/thumbnails/_mg_9303.jpg"

const images: Gallery["images"] = [
  {
    original: _mg_0816,
    thumbnail: _mg_0816_t,
  },
  {
    original: _mg_9114,
    thumbnail: _mg_9114_t,
  },
  {
    original: _mg_8981,
    thumbnail: _mg_8981_t,
  },
  {
    original: _mg_9009,
    thumbnail: _mg_9009_t,
  },
  {
    original: _mg_0779,
    thumbnail: _mg_0779_t,
  },
  {
    original: _mg_8995_copia,
    thumbnail: _mg_8995_copia_t,
  },
  {
    original: _mg_9036,
    thumbnail: _mg_9036_t,
  },
  {
    original: _mg_2208,
    thumbnail: _mg_2208_t,
  },
  {
    original: _mg_9196,
    thumbnail: _mg_9196_t,
  },
  {
    original: _mg_2483,
    thumbnail: _mg_2483_t,
  },
  {
    original: _mg_5397,
    thumbnail: _mg_5397_t,
  },
  {
    original: _mg_9074,
    thumbnail: _mg_9074_t,
  },
  {
    original: _mg_0823,
    thumbnail: _mg_0823_t,
  },
  {
    original: _mg_5280,
    thumbnail: _mg_5280_t,
  },
  {
    original: _mg_5469,
    thumbnail: _mg_5469_t,
  },
  {
    original: _mg_5504,
    thumbnail: _mg_5504_t,
  },
  {
    original: _mg_2558,
    thumbnail: _mg_2558_t,
  },
  {
    original: _mg_5587,
    thumbnail: _mg_5587_t,
  },
  {
    original: _mg_9313,
    thumbnail: _mg_9313_t,
  },
  {
    original: _mg_9303,
    thumbnail: _mg_9303_t,
  },
]

const gallery = {
  id: "burano",
  images,
  title: "Burano",
  text: outdent`
    Burano situa-se na lagoa de Veneza, e tal como a sua vizinha sete quilómetros mais a sul, Veneza, é na realidade uma localidade constituída por várias ilhas pequenas ligadas por pontes entre si.

    Localizada cerca de Torcello no extremo norte da Lagoa, é conhecida pelos seus cristais e trabalho em renda. É habitada por aproximadamente 3.000 pessoas.

    É uma ilha muito tranquila, com casas bonitas e de cores vivas, possui canais no lugar de ruas e barcos no lugar de carros.
  `,
} as const satisfies Gallery

export default gallery
