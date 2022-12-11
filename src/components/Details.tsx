import React, {ChangeEvent} from 'react';
import { useState } from 'react'
import styles from './Details.module.css';

type DetailsProps = {
    shortText: string;
    text: string
}

export function Details({shortText, text}: DetailsProps) {
    const [show, setShow] = useState(true);
    const [link, setLink] = useState('подробнее');
    const [det, setDet] = useState(' ');

    function submitHandler({e}: { e: any }) {
        if (!show) {
            setShow(true)
            setLink('подробнее');
            setDet(' ');

        } else {
            setShow(false);
            setLink('скрыть');
            setDet(text);
        }
    }

    return <div className={styles.details}>
        <text>{shortText}
            <text>{det}</text>
            <span className={styles.link} onClick={(e) => submitHandler({e: e})}>{link}</span>
        </text>
    </div>;
}
