// Unpublished Work © 2023 Deere & Company.

import { SyntheticEvent, useState } from 'react';

import classNames from 'classnames';
import styles from './quantity-selector.module.scss';
import { InputBase } from '@mui/material';
import React from 'react';

export const ClickAwayInput = ({



    inputValue
}) => {


  


    return (

        <div className={styles.inputWrapper}>
            <InputBase
                className={styles.input}
                
             
                value={inputValue}


            />

        </div>
    );
};
