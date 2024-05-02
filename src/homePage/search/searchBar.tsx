import React from 'react'
import styles from './searchBar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { resetImgListFiltered, setImgListFiltered } from '../../redux/action-creators/imgList.ts';

export const SearchBar = () => {
    const imgList = useSelector((state) => state.imgList)
    const dispatch = useDispatch()

    const searchImgList = (event: React.ChangeEvent) => {
        const newValue = event.target.value
        if (newValue !== '') {
            const newList = imgList.filter((img) => img.title.toLowerCase().includes(newValue.toLowerCase()))
            dispatch(setImgListFiltered(newList))
        }
        else dispatch(resetImgListFiltered())
    }
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                onChange={searchImgList}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                className={styles.searchInput}
            />
        </div>
    )
}
