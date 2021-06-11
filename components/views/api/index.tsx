// SPDX-License-Identifier: AGPL-3.0-or-later
// Copyright © 2021 Josué Ulises Sandoval Jiménez

import { IEndPoint } from '../../../domain/model/resource';

import styles from './styles.module.css'

export interface Props {
    endpoints: Array<IEndPoint>,
}

export default function ApiView({
    endpoints,
}: Props) {
    return (
        <div className="box">
            <h1>API</h1>
            <ul className={styles.list}>
                {endpoints.map(ep => (
                    <li
                        key={ep.showUrl}
                        className={styles.listItem}
                    >
                        <span>
                            {ep.method}
                        </span>
                        {' - '}
                        <a
                            href={ep.url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {ep.showUrl}
                        </a>{' '}🔗
                        <br />
                        <span>{ep.desc}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}