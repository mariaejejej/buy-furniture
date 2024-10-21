// Unpublished Work © 2019-2023 Deere & Company

import {SyntheticEvent, useEffect, useRef, useState} from 'react';

import {ClickAwayInput} from './click-away-input.tsx';
import {Decrementer} from './decrementer.tsx';
import {Incrementer} from './incrementer.tsx';
import classNames from 'classnames';
import styles from './quantity-selector.module.scss';
import React from 'react';


export const QuantitySelector = ({
    onChange,
    value
}) => {
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    const inputOnChange = (event: SyntheticEvent, quantity: string | number) => {
        setInputValue(quantity);
        onChange(event, Number(quantity));
    };

    const classes = classNames(styles.quantitySelector);

    return (
        <div
            className={classNames(classes, 'fs-ignore-rage-clicks')}
            data-testid='quantity-selector'
        >
            <Decrementer
                quantity={value}
                setQuantity={inputOnChange}
            />
            <ClickAwayInput
                inputValue={inputValue}
            />
            <Incrementer
                quantity={value}
                setQuantity={inputOnChange}
            />
        </div>
    );
};
