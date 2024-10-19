import { Box, Tab, Tabs } from '@mui/material'
import classNames from 'classnames';
import React, { useState } from 'react'
import styles from './filterTabs.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { resetImgListFiltered, setImgListFiltered } from '../../redux/action-creators/imgList.ts';
import { state } from '../../redux/state/state.ts';

const pages = [
    { value: 'allProducts', label: 'All Products' },
    { value: 'bedroom', label: 'Bedroom' },
    { value: 'dining', label: 'Dining Room' },
    { value: 'office', label: 'Office' }
];

const FilterTabs = () => {
    const [selectedTab, setSelectedTab] = useState(pages[0].value);
    const imgList = useSelector((state: state) => state.imgList)
    const dispatch = useDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {

        if (newValue === pages[0].value) {
            dispatch(resetImgListFiltered())
            setSelectedTab(pages[0].value)
        }
        else {
            const newList = imgList.filter((img) => img.category.toLowerCase().includes(newValue.toLowerCase()))
            dispatch(setImgListFiltered(newList))
            setSelectedTab(newValue)
        }

    }
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <div className={classNames(styles.menu)}>
                <Tabs
                    value={selectedTab}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    {pages.map(({ value, label }) => (
                        <Tab
                            value={value}
                            classes={{
                                root: classNames(styles.menuButton),
                                selected: classNames(styles.selected)
                            }}
                            label={label}
                        />
                    ))}
                </Tabs>
            </div>
        </Box>
    )
}

export default FilterTabs