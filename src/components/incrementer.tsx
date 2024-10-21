// Unpublished Work © 2019-2023 Deere & Company


import AddIcon from '@mui/icons-material/Add';
import { SyntheticEvent } from 'react';
import classNames from 'classnames';
import styles from './quantity-selector.module.scss';
import { IconButton } from '@mui/material';
import React from 'react';

export const Incrementer = ({

    quantity,
    setQuantity
}) => {


    const incrementQuantity = (event: SyntheticEvent) => {
        const nextQuantity = Number(quantity) + 1;

        setQuantity(event, nextQuantity);
    };

    return (

        <IconButton
            className={styles.incrementer}
            data-testid='incrementer'
            onClick={incrementQuantity}
        >
            <AddIcon />
        </IconButton>
    );
};
