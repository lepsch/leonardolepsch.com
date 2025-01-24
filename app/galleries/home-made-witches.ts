import outdent from "outdent"
import type { Gallery } from "./Gallery"

const IMG01_2830 = "/images/home-made-witches/IMG01_2830.jpg"
const IMG02_2813b = "/images/home-made-witches/IMG02_2813b.jpg"
const IMG03_2883b = "/images/home-made-witches/IMG03_2883b.jpg"
const IMG03_3064 = "/images/home-made-witches/IMG03_3064.jpg"
const IMG04_2883b = "/images/home-made-witches/IMG04_2883b.jpg"
const IMG04_8445 = "/images/home-made-witches/IMG04_8445.jpg"
const IMG05_3064 = "/images/home-made-witches/IMG05_3064.jpg"
const IMG05_8445 = "/images/home-made-witches/IMG05_8445.jpg"
const IMG06_7644 = "/images/home-made-witches/IMG06_7644.jpg"
const IMG07_8181 = "/images/home-made-witches/IMG07_8181.jpg"
const IMG08_4183 = "/images/home-made-witches/IMG08_4183.jpg"
const IMG09_6940 = "/images/home-made-witches/IMG09_6940.jpg"
const IMG10_6491b = "/images/home-made-witches/IMG10_6491b.jpg"
const IMG11_1833 = "/images/home-made-witches/IMG11_1833.jpg"
const IMG12__1963 = "/images/home-made-witches/IMG12__1963.jpg"
const IMG13_1358 = "/images/home-made-witches/IMG13_1358.jpg"
const IMG14_7941 = "/images/home-made-witches/IMG14_7941.jpg"
const IMG15_2997 = "/images/home-made-witches/IMG15_2997.jpg"
const IMG16_2289c = "/images/home-made-witches/IMG16_2289c.jpg"
const IMG17_2462 = "/images/home-made-witches/IMG17_2462.jpg"
const IMG18_2445 = "/images/home-made-witches/IMG18_2445.jpg"
const IMG19_3985b = "/images/home-made-witches/IMG19_3985b.jpg"
const IMG20b_7664 = "/images/home-made-witches/IMG20b_7664.jpg"
const IMG21_5738b = "/images/home-made-witches/IMG21_5738b.jpg"
const IMG22_5773 = "/images/home-made-witches/IMG22_5773.jpg"
const IMG23_3541 = "/images/home-made-witches/IMG23_3541.jpg"
const IMG24_6452 = "/images/home-made-witches/IMG24_6452.jpg"
const IMG25_6056 = "/images/home-made-witches/IMG25_6056.jpg"
const IMG26_6360 = "/images/home-made-witches/IMG26_6360.jpg"
const IMG27_7440 = "/images/home-made-witches/IMG27_7440.jpg"
const IMG28_7350 = "/images/home-made-witches/IMG28_7350.jpg"
const IMG29_0034 = "/images/home-made-witches/IMG29_0034.jpg"
const IMG29_9443 = "/images/home-made-witches/IMG29_9443.jpg"
const IMG30_0352 = "/images/home-made-witches/IMG30_0352.jpg"
const IMG30_9943 = "/images/home-made-witches/IMG30_9943.jpg"
const IMG31_0034 = "/images/home-made-witches/IMG31_0034.jpg"
const IMG31_9443 = "/images/home-made-witches/IMG31_9443.jpg"
const IMG32_0352 = "/images/home-made-witches/IMG32_0352.jpg"
const IMG32_9943 = "/images/home-made-witches/IMG32_9943.jpg"

const IMG01_2830_t = "/images/home-made-witches/thumbnails/IMG01_2830.jpg"
const IMG02_2813b_t = "/images/home-made-witches/thumbnails/IMG02_2813b.jpg"
const IMG03_2883b_t = "/images/home-made-witches/thumbnails/IMG03_2883b.jpg"
const IMG03_3064_t = "/images/home-made-witches/thumbnails/IMG03_3064.jpg"
const IMG04_2883b_t = "/images/home-made-witches/thumbnails/IMG04_2883b.jpg"
const IMG04_8445_t = "/images/home-made-witches/thumbnails/IMG04_8445.jpg"
const IMG05_3064_t = "/images/home-made-witches/thumbnails/IMG05_3064.jpg"
const IMG05_8445_t = "/images/home-made-witches/thumbnails/IMG05_8445.jpg"
const IMG06_7644_t = "/images/home-made-witches/thumbnails/IMG06_7644.jpg"
const IMG07_8181_t = "/images/home-made-witches/thumbnails/IMG07_8181.jpg"
const IMG08_4183_t = "/images/home-made-witches/thumbnails/IMG08_4183.jpg"
const IMG09_6940_t = "/images/home-made-witches/thumbnails/IMG09_6940.jpg"
const IMG10_6491b_t = "/images/home-made-witches/thumbnails/IMG10_6491b.jpg"
const IMG11_1833_t = "/images/home-made-witches/thumbnails/IMG11_1833.jpg"
const IMG12__1963_t = "/images/home-made-witches/thumbnails/IMG12__1963.jpg"
const IMG13_1358_t = "/images/home-made-witches/thumbnails/IMG13_1358.jpg"
const IMG14_7941_t = "/images/home-made-witches/thumbnails/IMG14_7941.jpg"
const IMG15_2997_t = "/images/home-made-witches/thumbnails/IMG15_2997.jpg"
const IMG16_2289c_t = "/images/home-made-witches/thumbnails/IMG16_2289c.jpg"
const IMG17_2462_t = "/images/home-made-witches/thumbnails/IMG17_2462.jpg"
const IMG18_2445_t = "/images/home-made-witches/thumbnails/IMG18_2445.jpg"
const IMG19_3985b_t = "/images/home-made-witches/thumbnails/IMG19_3985b.jpg"
const IMG20b_7664_t = "/images/home-made-witches/thumbnails/IMG20b_7664.jpg"
const IMG21_5738b_t = "/images/home-made-witches/thumbnails/IMG21_5738b.jpg"
const IMG22_5773_t = "/images/home-made-witches/thumbnails/IMG22_5773.jpg"
const IMG23_3541_t = "/images/home-made-witches/thumbnails/IMG23_3541.jpg"
const IMG24_6452_t = "/images/home-made-witches/thumbnails/IMG24_6452.jpg"
const IMG25_6056_t = "/images/home-made-witches/thumbnails/IMG25_6056.jpg"
const IMG26_6360_t = "/images/home-made-witches/thumbnails/IMG26_6360.jpg"
const IMG27_7440_t = "/images/home-made-witches/thumbnails/IMG27_7440.jpg"
const IMG28_7350_t = "/images/home-made-witches/thumbnails/IMG28_7350.jpg"
const IMG29_0034_t = "/images/home-made-witches/thumbnails/IMG29_0034.jpg"
const IMG29_9443_t = "/images/home-made-witches/thumbnails/IMG29_9443.jpg"
const IMG30_0352_t = "/images/home-made-witches/thumbnails/IMG30_0352.jpg"
const IMG30_9943_t = "/images/home-made-witches/thumbnails/IMG30_9943.jpg"
const IMG31_0034_t = "/images/home-made-witches/thumbnails/IMG31_0034.jpg"
const IMG31_9443_t = "/images/home-made-witches/thumbnails/IMG31_9443.jpg"
const IMG32_0352_t = "/images/home-made-witches/thumbnails/IMG32_0352.jpg"
const IMG32_9943_t = "/images/home-made-witches/thumbnails/IMG32_9943.jpg"

const images: Gallery["images"] = [
  {
    original: IMG01_2830,
    thumbnail: IMG01_2830_t,
    description: outdent`
      Name: Rebecca Ime Sunday, 14 years old
      Accusation: Of being a witch and causing her mother's illness
      Punishment: Forced to fast, tied with ropes and tortured with bricks and made to drink her own blood
      Redemption: Found roaming the streets and taken to the orphanage
    `,
  },
  {
    original: IMG02_2813b,
    thumbnail: IMG02_2813b_t,
    description: outdent`
      Name: Idongesit John, 13 years old (on the right). Akpautong village
      Accusation: Father believed she was a witch. Blamed for the loss of his job and divorce
      Punishment: Thrown out into the streets
      Redemption: Found and taken to the orphanage
    `,
  },
  {
    original: IMG03_3064,
    thumbnail: IMG03_3064_t,
    description: outdent`
      "Acting in a mischievous way is a key symptom to a child being a witch. If a child around two years of age wakes up in the middle of the night crying or having a fever it implies that the child is a witch" according to a book written by a popular Nigerian preacher named Helen Ukpabio
    `,
  },
  // {
  //   original: IMG03_2883b,
  //   thumbnail: IMG03_2883b_t,
  // },
  {
    original: IMG04_2883b,
    thumbnail: IMG04_2883b_t,
    description: outdent`
      Name: Idongesti Friday Akpan, age unknown. Eket in Akwa Ibom State
      Accusation: Father blamed her for her mother's death and accused her of being a witch
      Punishment: Thrown out into the streets
      Redemption: Found and taken to the orphanage
    `,
  },
  // {
  //   original: IMG04_8445,
  //   thumbnail: IMG04_8445_t,
  // },
  // {
  //   original: IMG05_3064,
  //   thumbnail: IMG05_3064_t,
  // },
  {
    original: IMG05_8445,
    thumbnail: IMG05_8445_t,
    description: outdent`
      Name: Mary Efflong Uno, 8 years old
      Accusation: Stigmatised by mother
      Punishment: Locked up in a room and left to starve. Escaped onto the streets
      Redemption: Found and taken to the orphanage.
    `,
  },
  {
    original: IMG06_7644,
    thumbnail: IMG06_7644_t,
    description: outdent`
      Name: Hezekiah Okon Ekipma, 7 years old
      Accusation: Of being a witch by a family friend
      Punishment: Left to starve by his father to extract a confession and led by his older brother into the forest to be killed
      Redemption: Escaped and directed to the orphanage
    `,
  },
  {
    original: IMG07_8181,
    thumbnail: IMG07_8181_t,
    description: outdent`
      Hezekiah's broken arm being painfully put back in place by a local doctor.
    `,
  },
  {
    original: IMG08_4183,
    thumbnail: IMG08_4183_t,
    description: outdent`
      Witch children often have to count on the mercy of strangers as they cannot rely on their families who see them as the enemy.
    `,
  },
  {
    original: IMG09_6940,
    thumbnail: IMG09_6940_t,
    description: outdent`
      From the children's point of view the darkness imposed on them comes from above and they associate the spirit of evil with the name of Jesus.
    `,
  },
  {
    original: IMG10_6491b,
    thumbnail: IMG10_6491b_t,
    description: outdent`
      Name: Emmilia (on the back), age unknown
      Accusation: She developed a large lump on her back and her brother was accused of causing it by witchcraft. It transpired the lump was caused by TB
      Punishment: Her brother was exiled from the community
      Redemption: Her brother is in the orphanage, Emmilia carries the guilt
    `,
  },
  {
    original: IMG11_1833,
    thumbnail: IMG11_1833_t,
    description: outdent`
      An orphanage called Crarn was founded by a Nigerian man called Sam Itauma from a city called Eket in Akwa Ibom State. The orphanage began when he found four children wandering in the streets and decided to rescue them leading to all children under the accusation of being a witch coming to knock on his door in the hope of a safe haven.
    `,
  },
  {
    original: IMG12__1963,
    thumbnail: IMG12__1963_t,
    description: outdent`
      Name: Moses Etin Dan, age unknown
      Accusation: Blamed by his father for his mother's death
      Punishment: Driven out of his home
      Redemption: Found on the street and taken to the orphanage
    `,
  },
  {
    original: IMG13_1358,
    thumbnail: IMG13_1358_t,
    description: outdent`
      Name: Grace Ime Ukpong, 12 years of age
      Accusation: Accused by a pastor of being a witch
      Punishment: Sent to roam the streets
      Redemption: Found and taken to the orphanage
    `,
  },
  {
    original: IMG14_7941,
    thumbnail: IMG14_7941_t,
    description: outdent`
      Name: Akpan, 2 years old
      Accusation: Of being a witch
      Punishment: Left by a roadside, found to have a serious spinal condition as a result of TB
      Redemption: Lives in the orphanage
    `,
  },
  {
    original: IMG15_2997,
    thumbnail: IMG15_2997_t,
    description: outdent`
      Jojo de Olivença, on the right, a Brazilian surfing champion helping Nigerian street children to use surf boards as a vehicle for education and teaching a process of trust in people and respect for the environment.
    `,
  },
  {
    original: IMG16_2289c,
    thumbnail: IMG16_2289c_t,
    description: outdent`
      Name: Uwana Monday Dan, 12 years old
      Accusation: His mother believed he was a witch, as he was called this by his friend and confirmed by a church prophet
      Punishment: Tied up, blindfolded, chopped with a machete and left to die tied to an orange tree
      Redemption: Rescued and taken to the orphanage.
    `,
  },
  {
    original: IMG17_2462,
    thumbnail: IMG17_2462_t,
    description: outdent`
      Name: Edidlong Afla Edoho, age unknown
      Accusation: Of being a witch
      Punishment: Exiled from his home
      Redemption: Saved to the orphanage
    `,
  },
  {
    original: IMG18_2445,
    thumbnail: IMG18_2445_t,
    description: outdent`
      Children being taken to the beach by the Brazilian NGO Waves Project.
    `,
  },
  {
    original: IMG19_3985b,
    thumbnail: IMG19_3985b_t,
    description: outdent`
      Name: Mmandeu, 17 years old
      Accusation: Her spirit had left her body in the night, gone to the forest to make a covenant with witches
      Punishment: Abandoned on the streets, raped and fell pregnant
      Redemption: Back at home with the baby
    `,
  },
  {
    original: IMG20b_7664,
    thumbnail: IMG20b_7664_t,
    description: outdent`
      Name: Etido Gabriel Akpan, 8 years old
      Accusation: Was stigmatised because of his epilepsy
      Punishment: Hurt and abandoned in the streets
      Redemption: Incapable of speaking, body full of scars but rescued by the orphanage
    `,
  },
  {
    original: IMG21_5738b,
    thumbnail: IMG21_5738b_t,
    description: outdent`
      Name: Samuel (on the right), 8 years old
      Accusation: Of witchcraft
      Punishment: Exiled by his family and thrown onto the streets
      Redemption: Stepping Stone Nigeria talked his family into taking him back, that he wasn't a witch and he is back leading a normal life
    `,
  },
  {
    original: IMG22_5773,
    thumbnail: IMG22_5773_t,
    description: outdent`
      Name: Udo, 16 years of age
      Accusation: Deemed to be a witch and betrayed
      Punishment: Abandoned by his family and became a product of human traffic. He doesn't trust anyone and fights to survive.
    `,
  },
  {
    original: IMG23_3541,
    thumbnail: IMG23_3541_t,
    description: outdent`
      When discussing the Gospel of Jesus in relation to witchcraft, people appear confused by the dilemma of the spoken versus the written Word, or interpretation versus truth.
    `,
  },
  {
    original: IMG24_6452,
    thumbnail: IMG24_6452_t,
    description: outdent`
      Local pastors fail to address the subject of witchcraft for fear of losing their church and the support of their community.
    `,
  },
  {
    original: IMG25_6056,
    thumbnail: IMG25_6056_t,
    description: outdent`
      Self-appointed pastors keep witch children, mainly women, for months on end for alleged deliverance ministry which includes pagan rituals as well as receiving financial incentives from the family. Often, these children go back home pregnant.
    `,
  },
  {
    original: IMG26_6360,
    thumbnail: IMG26_6360_t,
    description: outdent`
      Deep in the communities most affected by the witchcraft beliefs the team of the NGO Way to the Nations not only clarifies what the Gospel of Jesus actually say about children but also pray with the community asking God to cast out the fear of their hearts and fill it with love for one another. This kind of action seems to have more effect on the people than would a governmental law or doctors words.
    `,
  },
  {
    original: IMG27_7440,
    thumbnail: IMG27_7440_t,
    description: outdent`
      Children in seeking vindication and acceptance from their families put themselves forward to be prayed for by men of faith, strangers who tell them that they are children of a living and loving God.
    `,
  },
  {
    original: IMG28_7350,
    thumbnail: IMG28_7350_t,
    description: outdent`
      Village chiefs in view of the lack of communal education often determine what their people believe or not. It is often up to them to decide whether a child is possessed or not. It is up to them to alter children's destiny for the better or for the worse.
    `,
  },
  {
    original: IMG29_0034,
    thumbnail: IMG29_0034_t,
    description: outdent`
      Archbishop Idem Ikon, who ministers in the city of Uyo, leads the fight against witchcraft accusations in the state of Akwa Ibom. Whilst well respected by the community he serves he has as yet been unable to influence other church leaders to assist him and fight this evil belief.
    `,
  },
  // {
  //   original: IMG29_9443,
  //   thumbnail: IMG29_9443_t,
  // },
  {
    original: IMG30_0352,
    thumbnail: IMG30_0352_t,
    description: outdent`
      Mrs Ann Medekomg an English lady who, together with her husband, has been fighting to defend the witch children of Nigeria. She uses dramatic art forms to portray the reality and the severity of this national problem caused by false beliefs.
    `,
  },
  // {
  //   original: IMG30_9943,
  //   thumbnail: IMG30_9943_t,
  // },
  // {
  //   original: IMG31_0034,
  //   thumbnail: IMG31_0034_t,
  // },
  {
    original: IMG31_9443,
    thumbnail: IMG31_9443_t,
    description: outdent`
      When his single mum passed away, his grandmother raised him and taught him about the Gospel of Jesus and that he should be salt and light to his community and the society at large. His knowledge of truth served him well and he is now a student of psychology working for Stepping Stone Nigeria fighting for children’s rights.
    `,
  },
  // {
  //   original: IMG32_0352,
  //   thumbnail: IMG32_0352_t,
  // },
  {
    original: IMG32_9943,
    thumbnail: IMG32_9943_t,
    description: outdent`
      His mother, called Mercy, decided that in order to cure him of his demon possession that he should be tied and chained to the pillar in the back of the church until it was deemed that he was spiritually cleansed. He stayed there for weeks and lived like an animal on a daily portion of water and bread, exposed to the elements and unloved.
    `,
  },
]

const gallery = {
  id: "home-made-witches",
  images,
  title: "Home Made Witches",
  subtitle: "Living back in the burning times",
  text: outdent`
    Voices of the little ones are crying out from Central Africa, to be more precise from the Niger Delta in the South of Nigeria, where people are practising what was common in the Middle Age when people were labelled as witches by the church and burned alive on the streets. Déjà vu!

    The main difference between now and then is the fact that then they used to burn adults practicing black magic and evil sorcery and now the main target are mischievous children.

    It is the result of a syncretism phenomenon originated from the fusion between the Neo-Pentecostal evangelical movement with its prosperity theology and the millenary witchcraft beliefs from the pagan African religions. It's also another scheme to make money but a scheme that is destroying the Nigerian families.

    The pattern of the cases is quite standard and became a doctrine in many Pentecostal churches. When a "pastor" or "prophet" finds out about a misfortune in one of his church's families such someone lost a job, became ill or died, the pastor will accuse one of this family's children of been a witch and will blame the child of practising witchcraft and causing this misfortune.

    Usually the families believe that the most mischievous child is the witch. Their pastor will then offer to exorcise this child but will charge a fee, usually equivalent to three months of the local average wage. The exorcism ritual practiced is in itself a torture but in many of the cases the families can't afford it and the results are even more tragic. The child will go through a process of torture and ostracism and even murder by hers or his own family.

    The same Holy Bible that says "Love casts out all fear" is again been used to cause fear on people and driving them to cast out their love and their beloved little ones. Passages are literally applied like a verse from the Old Testament which says "do not allow a witch to live".

    In many registered cases children were burned with acid, hot water or fire; some had nails across their heads and broken limbs; some were forsaken on the streets even been under four years old; some were tied with fence wire to a tree in the middle of the bushes and left to starve to death, while others were buried alive.

    Local agencies say that in only two states of Nigeria around 15.000 children have been stigmatized and around 1.000 have been murdered since it started.

    It started less than a decade ago but is spreading fast in Central Africa having also alarming number of cases in Democratic Republic of Congo.

    So far there were two NGOs fighting the problem, one called Stepping Stone Nigeria who fights for the stigmatized children's rights and an orphanage called C.R.A.R.N that rescue stigmatized and abandoned children from the streets where they are often abused and murdered.

    Recently a team of Brazilian missionaries' participants of a movement called Way to the Nations started a pioneer project in the area fighting the ignorance of the people, bringing enlightenment about the Gospels, casting out the fear caused by pagan teachings and beliefs, changing the life of many.

    Now these three NGOs are working together and hard, fighting the causes and the consequences of the problem. It will be a long term project but all of them are committed not to rest while they hear that children are being abused and burned, and in the name of Jesus!
  `
} as const satisfies Gallery

export default gallery
