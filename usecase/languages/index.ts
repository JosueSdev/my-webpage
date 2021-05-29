import { ILanguage } from "../../domain/model/language";

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

export function getStaticLangs() {
    return Object.keys(languages).map(langKey => ({
        params: {
            lang: languages[langKey].id
        },
    }))
}

export function getLanguageById(id: string) {
    const langs = Object.keys(languages).map(langKey => languages[langKey])
    
    return langs.find(lang => lang.id === id)
}

export default languages