import Head from 'next/head'

import { OGArticle, OGImage, OGProfile } from '../../../domain/model/openGraph'
import Profile from './profile'

export interface Props {
    title: string,
    url: string,
    type: string,
    image: OGImage,

    description?: string,
    siteName?: string,
    locale?: string,
    localeAlternate?: Array<string>,

    article?: OGArticle,
}

export default function OpenGraph({
    title,
    url,
    type,
    image,
    description,
    siteName,
    locale,
    localeAlternate,
    article,
}: Props) {
    return (
        <Head>
            <meta property='og:title'
                content={title}
            />
            <meta property='og:url'
                content={url}
            />
            <meta property='og:image'
                content={image.url}
            />
            <meta property='og:image:alt'
                content={image.alt}
            />
            <meta property='og:type'
                content={type}
            />
            {image.width &&
                <meta property='og:image:width'
                    content={image.width}
                />
            }
            {image.height &&
                <meta property='og:image:height'
                    content={image.height}
                />
            }
            {description &&
                <meta property='og:description'
                    content={description}
                />
            }
            {siteName &&
                <meta property='og:site_name'
                    content={siteName}
                />
            }
            {locale &&
                <meta property='og:locale'
                    content={locale}
                />
            }
            {localeAlternate && localeAlternate.map(alt => (
                <meta property='og:locale:alternate'
                    key={alt}
                    content={alt}
                />
            ))}
            {article &&
            <>
                <meta property='og:article:published_time'
                    content={article.publishedTime}
                />
                {article.authors.map(author => (
                    <Profile
                        key={author.firstName+author.lastName}
                        profile={author}
                        as='author'
                    />
                ))}
                {article.modifiedTime && (
                    <meta property='og:article:modified_time'
                        content={article.modifiedTime}
                    />
                )}
                {article.section && (
                    <meta property='og:article:section'
                        content={article.section}
                    />
                )}
                {article.tags && article.tags.map(tag => (
                    <meta property='og:article:tag'
                        content={tag}
                    />
                ))}
            </>
            }
        </Head>
    )
}