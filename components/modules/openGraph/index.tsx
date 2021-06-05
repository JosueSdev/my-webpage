import Head from 'next/head'

import { OGImage } from '../../../domain/model/openGraph'

export interface Props {
    title: string,
    url: string,
    type: string,
    image: OGImage,
    description?: string,
    siteName?: string,
    locale?: string,
}

export default function OpenGraph({
    title,
    url,
    type,
    image,
    description,
    siteName,
    locale,
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
        </Head>
    )
}