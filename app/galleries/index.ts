import homeMadeWitches from "./home-made-witches"
import burano from "./burano"
import pipa from "./pipa"
import portugalPequeno from "./portugal-pequeno"
import rioDasPedras from "./rio-das-pedras"
import millsFlour from "./mills-flour"

const galleries = [homeMadeWitches, burano, pipa, portugalPequeno, rioDasPedras, millsFlour]

export type GalleryId = (typeof galleries)[number]["id"]

export type * from "./Gallery"

export default galleries
