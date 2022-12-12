import React, {ChangeEvent} from 'react';
import { useState } from 'react'
import styles from './Details.module.css';

type DetailsProps = {
    shortText: string;
    text: string
}

export function Details({shortText, text}: DetailsProps) {
    const [show, setShow] = useState(false);


    return <div className={styles.details}>
        <text><b>{shortText}</b>
            <text>{show ? text: ''}</text>
            <span className={styles.link} onClick={() => setShow(!show)}>{show ? 'скрыть' : ' подробнее'}</span>
        </text>
    </div>;
}
