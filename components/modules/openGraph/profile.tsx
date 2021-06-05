import Head from 'next/head'

import { OGProfile } from '../../../domain/model/openGraph'

export interface ProfileProps {
    profile: OGProfile,
    as?: string,
}

export default function OpenGraphProfile({
    profile,
    as,
}: ProfileProps) {
    const prefix = as || 'profile'
    return (
        <Head>
        {profile.url ? (
                <meta property={`og:${prefix}`}
                    content={profile.url}
                />
            )
            : (
                <>
                    <meta property={`og:${prefix}:first_name`}
                        content={profile?.firstName}
                    />
                    <meta property={`og:${prefix}:last_name`}
                        content={profile?.lastName}
                    />
                    {profile.username &&
                        <meta property={`og:${prefix}:username`}
                            content={profile?.username}
                        />
                    }
                </>
            )
        }
        </Head>
    )
}