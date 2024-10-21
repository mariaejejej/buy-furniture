import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Rating } from './rating.tsx'
import styles from './imageList.module.scss'
import { state, imgItem } from '../../redux/state/state.ts'
import { DescriptionModal } from '../descriptionModal/descriptionModal.tsx'
export type modalOpenType = {
  open: boolean
  item?: imgItem
}

export const ImageListC = () => {
  const itemData = useSelector((state: state) => state.imgListFiltered)

  const [openDescriptionModal, setOpenDescriptionModal] = useState<modalOpenType>({open:false})

  return (
    <>
      <ImageList cols={4}>
        {itemData?.map((item, index) => (
          <div className={styles.imgList} onClick={() => setOpenDescriptionModal({open:true, item})}>
            <ImageListItem key={`${item.img} ${index}`}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={
                  <div className={styles.itemBar}>
                    <span>By: {item.author}</span>
                    <Rating ratingValue={item.ratingValue} />
                    <h2>$ {item.price}</h2>
                  </div>
                }
                position="below"
              />
            </ImageListItem>
          </div>
        ))}
      </ImageList>
      <DescriptionModal
       setOpenDescriptionModal={setOpenDescriptionModal} 
       openDescriptionModal={openDescriptionModal} />
    </>


  )
}
