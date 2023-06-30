
interface deafaultPlayerCharacterReference {
  id: string
  name: string
  description: string
}

export interface playerCharacterCulture {
  id: string
  name: string
  honorifics?: string
  subculture: deafaultPlayerCharacterReference
  lineage: deafaultPlayerCharacterReference
  socialStanding: deafaultPlayerCharacterReference
}

export interface playerCharacter {
  name: string
  folk: string
  culture: playerCharacterCulture
  languages: string[]
  objects: string[]
}
