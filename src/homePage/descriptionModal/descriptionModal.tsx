import { Box, Button, DialogContent, Divider, IconButton, Modal, Typography } from '@mui/material'
import React from 'react'
import { ModalHeader } from './modal-header.tsx'
import classNames from 'classnames'
import styles from './modal.module.scss';
import { modalOpenType } from '../imageList/imageList.tsx';
import { Rating } from '../imageList/rating.tsx';
import { imgItem, state } from '../../redux/state/state.ts';
import { QuantitySelector } from '../../components/quantity-selector.tsx';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { setItemsShoppingCart } from '../../redux/action-creators/itemsShoppingCart.ts';

export type descriptionModalType = {
    openDescriptionModal: modalOpenType
    setOpenDescriptionModal: (modalOpenType: modalOpenType) => void
}

export const DescriptionModal = ({ openDescriptionModal, setOpenDescriptionModal }: descriptionModalType) => {

    const dispatch = useDispatch()
    const itemsShoppingCart = useSelector((state: state) => state.itemsShoppingCart)

    const [value, setQuantity] = React.useState(1);

    const handleOnChange = (event, newValue) => {
        setQuantity(newValue);
    };

    const imgDes = openDescriptionModal.item || {
        img: '',
        title: '',
        author: '',
        ratingValue: 0,
        price: ''
    }

    const {
        img,
        title,
        author,
        ratingValue,
        price

    }: imgItem = imgDes;
    return (
        <Modal
            open={openDescriptionModal.open}
            onClose={() => {
                setOpenDescriptionModal({ open: false })
                setQuantity(1)
            }}
            classes={{
                root: classNames(styles.modalRoot),
                backdrop: classNames(styles.backdrop)
            }}
        >
            <>
                <ModalHeader
                    onClose={() => {
                        setOpenDescriptionModal({ open: false })
                        setQuantity(1)
                    }}
                    title={'Furniture Description'}
                />
                <DialogContent
                    className={
                        styles.modalBody
                    }
                    
                    data-testid='modal-body'
                >
                    <Box className={styles.bodyContent}>
                        <img
                            srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${img}?w=248&fit=crop&auto=format`}
                            alt={title}
                            loading="lazy"
                            style={{ maxHeight: '250px' }}
                        />
                        <div className={styles.imgDescription}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant='h6' fontWeight={'bold'}>
                                {title}
                            </Typography>
                            <span>By: {author}</span>
                            <div className={styles.rating}>
                                <Rating ratingValue={ratingValue} />
                            </div>
                            <span className={styles.price}>
                                $ {price}
                            </span>
                           
                            </Box>
                            <Divider />
                            <Box sx={{ p: 2 }}>
                            <div className={styles.quantityAddToCart}>
                                <QuantitySelector
                                    onChange={handleOnChange}
                                    value={value}
                                />

                                <Button
                                    onClick={() => dispatch(setItemsShoppingCart(itemsShoppingCart + value))}
                                    variant="contained"
                                    classes={{
                                        root: classNames(styles.addToCart)
                                    }}
                                   
                                >
                                    Add to cart
                                    <AddShoppingCartIcon />
                                </Button>
                            </div>
 </Box>
                        </div>

                    </Box>
                </DialogContent>

            </>

        </Modal>
    )
}
