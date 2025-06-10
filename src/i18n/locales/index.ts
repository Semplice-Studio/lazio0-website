export type Translation = {
  code: string
  default: boolean
  language: string
  name: string
  file: string
}

export default [
  {
    code: 'it',
    default: true,
    language: 'it-IT',
    name: 'Italiano',
    file: 'it.js'
  }
  // {
  //   code: 'en',
  //   language: 'en-GB',
  //   name: 'English',
  //   file: 'en.js'
  // }
] as Translation[]
