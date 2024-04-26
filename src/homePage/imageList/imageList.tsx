import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export const ImageListC=()=> {
const itemData = useSelector((state)=> state.imgList)
    
  return (
    <ImageList cols={4}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={<span>by: {item.author}</span>}
          position="below"
        />
      </ImageListItem>
    ))}
  </ImageList>

  
  )
}
