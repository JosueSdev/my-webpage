import path from 'path'
import { OGImage } from '../domain/model/openGraph'

export function getBaseCanonicalUrl(locale: string, defaultLocale: string): string {
    const isDefaultLocale = locale! === defaultLocale
    return path.join(process.env.CANONICAL_URL || '', isDefaultLocale ? '' : locale!)
}

export function getCompleteOGImage(ogImage: OGImage, baseCanonUrl: string): OGImage {
    return {
        ...ogImage,
        url: path.join(baseCanonUrl, ogImage.url)
    }
}