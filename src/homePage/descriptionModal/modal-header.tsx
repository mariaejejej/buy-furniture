// Unpublished Work © 2021-2023 Deere & Company.

import classNames from 'classnames';
import styles from './modal.module.scss';
import { DialogTitle } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export const ModalHeader = ({
    onClose,
    title
}) => (
    <DialogTitle
        className={

            styles.modalHeader

        }
        data-testid='modal-header'

    >
        <h4
            className={classNames(styles.modalTitle)}
            data-testid='modal-title'
        >
            {title}
        </h4>
        <CloseIcon onClick={onClose} className={classNames(styles.modalCloseButton)} />
    </DialogTitle>
);
