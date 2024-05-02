import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Rating } from './rating.tsx'
import styles from './imageList.module.scss'
export const ImageListC = () => {
  const itemData = useSelector((state) => state.imgListFiltered)

  return (
    <ImageList cols={4}>
      {itemData?.map((item, index) => (
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
                <span>by: {item.author}</span>
                <Rating ratingValue={item.ratingValue}/>
                <h2>$ {item.price}</h2>
              </div>

            }
            position="below"
          />


        </ImageListItem>
      ))}
    </ImageList>


  )
}
