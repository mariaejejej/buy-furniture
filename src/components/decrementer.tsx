// Unpublished Work © 2019-2023 Deere & Company


import RemoveIcon from '@mui/icons-material/Remove';
import { SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './quantity-selector.module.scss';
import React from 'react';
import { IconButton } from '@mui/material';

export const Decrementer = ({

    
    quantity,
    setQuantity
}) => {

    const shouldNextStepBeOne = (value: number ) => value <= 1;

    const decrementQuantity = (event: SyntheticEvent) => {
        let nextQuantity;

        if (shouldNextStepBeOne(quantity)) {
            nextQuantity = 1;
        } else {
            nextQuantity = Number(quantity) - 1;
        }

        setQuantity(event, Number(nextQuantity));
    };

    return (
        <IconButton className={classNames(styles.decrementer)}
            data-testid='decrementer'
             disabled={quantity === 1}
            onClick={decrementQuantity}>
            <RemoveIcon/>
        </IconButton>

    );
};
