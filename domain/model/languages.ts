export interface ILanguage {
    id: string,
    value: string,
}
const languages: {[key: string]: ILanguage} = {
    spanish: {
        id: 'es',
        value: 'español'
    },
    english: {
        id: 'en',
        value: 'english'
    },
}

export default languages