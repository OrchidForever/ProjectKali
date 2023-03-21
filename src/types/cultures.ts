interface subculture {
  id: string
  name: string
  description: string
  languageBonus: string[]
  objectBonus: string[]
}

interface lineage {
  id: string
  name: string
  description: string
}

export interface cultureObject {
  id: string
  name: string
  honorifics?: string
  naming?: string
  exampleNames?: string
  keepInMind?: string
  startingObjects?: string[]
  startingObjectPick?: number
  subcultures: subculture[]
  lineage?: lineage[]
  socialStanding?: string[]
}

export const culture = [
  {
    id: '1',
    name: 'Gatusan',
    honorifics:
      'Laki [la-KEE] (Masculine), Bayi [ba-YEE] (Feminine), Sri (General, for Nobles)',
    naming:
      'Gatusanon are given names that describe qualities the family wants for them, a particular natural phenomenon that happened during the birthing, a beautiful tree or other natural item or the craving or fascination of the mother while pregnant. This can be a single word, or two, or sometimes entire sentences. Gatusanon can choose names for themselves as well.',
    exampleNames:
      'Siga, Liluan, Bagul, Aliluyuk, Mahimayaon, Haraw, Salug, Hinagiban, Daya, Hamabad, Kagiw, Gaang, Idyap, Alangilan, Bulsuk, Kutlu, Tanaman, Adilpa, Daganas, Nasirakna, Idda',
    keepInMind:
      'You are prone to song. The Datu must always be respected, unless you have the strength to do otherwise. All loot must be shared with the datu. Respect those with skill. Fuck with others.',
    startingObjects: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
    ],
    startingObjectPick: 2,
    subcultures: [
      {
        id: '1',
        name: 'Mantiwan',
        description:
          'The Isle of Ghosts and Phantasms and undead. A cursed island, any settlement that arises from here is immediately destroyed save for a single harbor principality, named Mantiwmantiw, led by Datu Kinatak, which is said to have created an accord with the death diwata that lives within.\nYou can speak Mantiwanun and start with ritual deathrope.',
        languageBonus: ['Mantiwanun'],
        objectBonus: ['17'],
      },
      {
        id: '2',
        name: 'Sagkabanun',
        description:
          'The Isle of Sea Warriors, who have the capacity to travel the Vastness of Wine, who live in the isle of Mairete.They are unmatched in their boat building capabilities and have become important allies for Kangdaya: most of their boatwrights come from here.\nYou can speak Sagkbanun and start with an adze.',
        languageBonus: ['Sagkbanun'],
        objectBonus: ['18'],
      },
      {
        id: '3',
        name: 'Noroknon',
        description:
          "You come from the monastic village of Norok. A popular polity led by CourtesanDatu Sinhata. It can be found in Salima Falls, one of the steepest and tallest waterfalls in all of The Sword Isles.There, the Salima Hotsprings lie at the base, heated by the volcano Duluum. The people of Norok have monastic-sages named Tigtimbang, those that weigh or keep the balance, and preach the holy faith of Hiyang, oneness and balance with nature, otherwise known as Conjunction.They are most known for worshipping the holy mountain of Ubir, whereupon a great Dakbalete can be found, said to house a number of spirits within.The Dakbalete, known as the Spirit's Bathhouse, is said to be a gateway into the realm of the spirits, as well as to Sulad. Norok is the constant giver and receiver of trades against Pannai.\nYou can speak Noroknon and start with flowering staff",
        languageBonus: ['Noroknon'],
        objectBonus: ['19'],
      },
      {
        id: '4',
        name: "Put'wanon",
        description: '',
        languageBonus: [],
        objectBonus: [],
      },
      {
        id: '5',
        name: 'Gandaranon',
        description: '',
        languageBonus: [],
        objectBonus: [],
      },
      {
        id: '6',
        name: '',
        description: '',
        languageBonus: [],
        objectBonus: [],
      },
      {
        id: '7',
        name: '',
        description: '',
        languageBonus: [],
        objectBonus: [],
      },
      {
        id: '8',
        name: '',
        description: '',
        languageBonus: [],
        objectBonus: [],
      },
    ],
    lineage: [
      {
        id: '1',
        name: 'Warrior Lineage.',
        description:
          'You come from a family of warriors faithful to the Rajahnate, who treat the new Hari as a close family friend and have pledged blood compacts with. Your tattoos sing of your courage and prowess.',
      },
      {
        id: '2',
        name: 'Merchant Nobility',
        description:
          "You come from a family of rich merchant princes who have traveled as far as the distant lands of Baik Hu, and perhaps have enterprises in Jamiyun Kulisa's Arrows.",
      },
      {
        id: '3',
        name: 'Tattoo Artists',
        description:
          "You come from a long line of tattoo artist professionals, or mamamatuk. You inscribe stories and traditions upon skin. Outsiders of the Sword Isles see that they didn't practice painting on paper, but that is because the islanders paint upon living canvas.",
      },
      {
        id: '4',
        name: 'Singers',
        description:
          'You come from a family of professional singers, who sing both epics and traditions, both glories and dirges.',
      },
      {
        id: '5',
        name: 'Traveler',
        description:
          ' You come from a family of skilled travelers, who ventured from isle to isle selling wares or offering their services. A very uncommon lineage in the isles, but they are more than happy to offer their barges to those that need it and can offer to pay. ',
      },
      {
        id: '6',
        name: 'Sensitives',
        description:
          "You come from a family touched by the spirits of the world, the diwata, and are inherently in tune with Diwa, the world's Strike. Your parents might have been the balyan (shamans) that channeled and performed concordance with the greater beings of nature.",
      },
      {
        id: '7',
        name: 'Adopted',
        description:
          "You were adopted into a family of courtesans and singers instead of warriors. You've never known your real family",
      },
      {
        id: '8',
        name: 'Tiger-Blooded',
        description:
          'You are a scion of the legendary tiger blood of Raja Batara Ambasi, and you might be eligible to take the Dawn Eater Crown. You are born deep into the courtly intrigues and intersettlement politics of Gatusan.',
      },
    ],
    socialStanding: [],
  },
  {
    id: '2',
    name: 'Apumbukid',
    naming: '',
    subcultures: [],
  },
  {
    id: '3',
    name: 'Akai',
    naming: '',
    subcultures: [],
  },
  {
    id: '4',
    name: 'Virbanwan',
    naming: '',
    subcultures: [],
  },
  {
    id: '5',
    name: 'Ba-e',
    naming: '',
    subcultures: [],
  },
]
