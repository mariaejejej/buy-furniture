import React from 'react'
import { Box, Rating as RatingC } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const Rating = ({ratingValue}) => {
    
    return (
        <>
            <RatingC
                name="hover-feedback"
                value={ratingValue}
                precision={0.5}
                readOnly
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            

        </>

    )
}
