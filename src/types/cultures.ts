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

interface socialStanding {
  id: string
  name: string
  description: string
  bonus: {
    type: string
    kind: string
  }
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
  socialStanding?: socialStanding[]
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
        description: 'You come from Put\'wan. Once a burgeoning kingdom of their own, they have since fallen in glory. Ancient Put\'wan once rivalled Ba-e in glory, and had great Annuvaran Kings of Righteous Merit. Much of the Put\'wan warlords have traveled to Akai, where they grew in power and fealty to the Sultanate.The current Lord of Put\'wan, Sarripada Sahaya, is the current brother of Raja Batara Ambasi.Thus while he pays fealty to the Rajah, he still commands a great deal of autonomy. Put\'wan itself was known as the City of Gold before Kangdaya. Built kilometers along the Inagos River, the river itself yields gold by just panning. Thus, gold was used as decoration for houses, for plates, for weapons and armor and more. Even debtors. A great number of goldsmiths, showing off their skill in their craft with their ability to fashion and craft gold like silk, come from Put\'wan. In ancient times, Put\'wan also had regular contact with Baik Hu and Loc Luang, trading and raiding their shores.\nYou can speak Put\'wanon and begin with a kalis with a pearl hilt.',
        languageBonus: ['Put\'wanon'],
        objectBonus: ['20'],
      },
      {
        id: '5',
        name: 'Gandaranon',
        description: 'You come from Gandara. A small fishing polity led by the Fisher-King DatuBalahura, who has a pet whale shark. Every year, someone is abducted by the forest, never tobe seen again.\nNone question this, although they say it is so that fishing remains bountiful, and that it is the unglu, lithe and tall shadowfolk that live in the mountains and the forests that need to be appeased.\nMany missions are sent there by the Lakanate but so far none have succeeded. At night, people speak of a mysterious City of Lights, which they have come to call Lungsod-Liwanag. Shining City. It trades amiably with the polities of Ibalnong.\nYou can speak Gandaranon and begin with a fishing rod.',
        languageBonus: ['Gandaranon'],
        objectBonus: ['21'],
      },
      {
        id: '6',
        name: 'Sinugpuanon',
        description: ' You come from Sinugpo. A city-state ruled by a long line of blue-blooded Datu, in the western peninsula of the Ramasa Island.They hold diplomatic relations with Naksuwarga and are known to train the fiercest of warriors.They conduct raids along the coast of Virbanwa, leading them to become hated enemies.They are masters of sea raiding and are known to hold good relations with almost all the other city-states, making them a formidable force to anger. Their current Datu, Datu Sangbagsik, is rumored to be plotting to overthrow the current Rajah and become the next one.\nYou can speak Sinugpuanon and begin with a porcelain jarlet of palm wine.',
        languageBonus: ['Sinugpuanon'],
        objectBonus: ['22'],
      },
      {
        id: '7',
        name: 'Panglawanon',
        description: 'Panglaw is the great city across the Strait of Kangdaya, upon the isle of Buwol, where the great Raja Sri Gatun fended off a contingent of Pale Kings during the First Albanon Arrival.They reckon a bloodline straight to Rajaraya Pintas, the first Conquering King, and their warrior pride matches even those of Kangdaya. A number of martial arts settlements have arisen in Buwol for this reason. You can speak Panglawanon and start with a tasseled ceremonial spear.',
        languageBonus: ['Panglawanon'],
        objectBonus: ['23'],
      },
      {
        id: '8',
        name: 'Kangdayanon',
        description: '. You belong to the great city of Kangdaya, the beast of our times, the one that shall eat the dawn. While not blessed with the great stupas and pagodas of Ba-e, the city stretches up the grand river and across the bay of Mantawili, and over even to the isle of Opon. A giant sword turned lighthouse sticks up from its bay. It has fended off the Pale Kings before, and thus it has never known defeat.The grand palace of the Hari belongs here, burgeoning with alloyed gold and bronze, unfellable, guarding the oldest strangler fig tree, known also as Malaun. You can speak Kangdayanun and start with city clothing (a sarong, a silk jacket, and a headwrap).\nThe largest city of the Rajahnate on the western island of Tauhaw. Kangdaya is the richest settlement in the Rajahnate, ruled by the Rajah Batara Ambasi from within its golden walled pagodas.\nKnown as the City of Gold, they are in position of large amounts of iron from mining, gold from their homes and rivers, and weapons from their diplomatic relations with the Baik Hu Hegemony, of which they have become an honored vassal state, thus giving Rajah Batara Ambasi the title of Hwang, and also thus being recognized as King by not just his own people, but also by the Hegemony of the Baik Hu Empire.\nThose that live in Kangdaya enjoy greater pleasures and privileges when it comes to trade and import. One can find bamboo-and-balete magdantang (communal spirit houses) and layered city walls in Kangdaya,They have since become a major target of Naksuwarga and Virbanwa during the Second Star Era.\nDestabilizing Kangdaya is the key to conquering all of Rajahnate.The greatest of the Rajahnate\'s Kadungganan, all of which are called timawa, are trained here in the Monastery of Winds.',
        languageBonus: ['Kangdayanun'],
        objectBonus: ['24'],
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
    socialStanding: [
      {
        id: '1',
        name: 'Bihag or Chattel',
        description: 'You were the victim of the Eighth Star Era\'s burgeoning violence, and have become nothing but wealth to be traded. You begin with nothing.',
        bonus: { type: '', kind: '' }
      },
      {
        id: '2',
        name: 'Hayohay or servant',
        description: 'You were indebted or were born into debt of a powerful person, whether it be a famed warrior, merchant, or aristocrat. Your hands are calloused from your work. You begin with a small push dagger.',
        bonus: { type: 'object', kind: '36' }
      },
      {
        id: '3',
        name: 'Tuhay or peasant',
        description: 'You were a loyal worker to your communities\' chief. You had your own house within the community, and offered part of your labor to him. You begin with a farming implement.',
        bonus: { type: 'weapon', kind: 'farming' }
      },
      {
        id: '4',
        name: 'Timawa or Warrior',
        description: 'You were a freeman, working as a warrior for the datu that you have chosen.The datu shares their spoils with you, their fellow warriors, and you earn your own house with your own wealth, though you answer to the datu\'s beck and call and sometimes toil for them. Gain a weapon.',
        bonus: { type: 'weapon', kind: 'any' }
      },
      {
        id: '5',
        name: 'Tumao or Aristocrat',
        description: 'You were born into richness, into the blood of the datu of your settlement. You are connected to the datu either through blood or social connections, and enjoy the benefits of nobility. You do not toil for the datu but you must pick up arms when called to battle. You have enjoyed the ability to take on multiple arts. You begin with a golden ear ornament.',
        bonus: { type: 'object', kind: '25' }
      },
      {
        id: '6',
        name: 'Kedatuan or Royalty',
        description: 'You are directly connected to your settlement\'s datu, either the datu is your uncle, grandparent, or parent. You are revered as an Aristocrat, although the expectation for you is much higher. If you are born female then you were treated as a binukot, a veiled maiden, hidden from the rest of the world until you were to be wed to someone your parents decided is fit for their social class. If you are born male you were trained in the arts of war and leadership. You begin with a royal heirloom.',
        bonus: { gender: 'male', type: 'heirloom', kind: 'any' }
      },
    ],
  },
  {
    id: '2',
    name: 'Apumbukid',
    honorifics: 'Aplake [ap-la-KEH] (Masculine), Akbaye [ak-BA-yeh] (Feminine)',
    naming: 'Similar to the Rajahnate\'s, although the individual choosing a name for themselves after their first conquest in love or war is common.',
    exampleNames: 'Felindag, Metegdaw, Asi, Atulun, Dengeg, Dagit, Fuga, Apaw, Kilut, Anyag, Abbal, Bansag, Buni-Buni, Darudu, Hifara, Tangu, Tobok, Mayasi, Baguybuy, Yomog, Fatu',
    keepInMind: 'You are well acquainted with the movements and breaths of harmony. Corrective action must be followed to heal harmony. The spirits prefer the cold, unsalted, and quiet. Scrutinize disharmony. Reprimand those that defile nature.',
    startingObjects: ['26', '21', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'],
    startingObjectPick: 2,
    subcultures: [],
    lineage: [],
    socialStanding: []
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
