import languages from "../../domain/model/languages";

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