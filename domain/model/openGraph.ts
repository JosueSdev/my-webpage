export interface OGImage {
    url: string,
    alt: string,
    width?: string,
    height?: string,
}

export interface OGProfile {
    firstName: string,
    lastName: string,
    username?: string,
    url?: string,
}

export interface OGArticle {
    publishedTime: string,
    authors: Array<OGProfile>,
    modifiedTime?: string,
    section?: string,
    tags?: Array<string>,
}