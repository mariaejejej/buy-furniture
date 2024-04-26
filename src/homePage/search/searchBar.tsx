import React from 'react'
import styles from './searchBar.module.scss'
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import { useSelector } from 'react-redux';

export const SearchBar = () => {
    const imgList = useSelector((state) => state.imgListFiltered)
    const searchImgList = (event: React.ChangeEvent) => {
        const newValue = event.target.value
        imgList.filter((img) => img.title.contains(newValue))
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
