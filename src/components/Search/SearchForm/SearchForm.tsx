import React, { useState, useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import SearchResults from '../SearchResults';
import { Box, Typography } from '@mui/material';
import styles from './styles.module.css';
import NavBar from '../../NavBar/NavBar';

export const SearchForm: React.FC = () => {
    const [searchField, setSearchField] = useState('');
    const { vacancies } = useContext(SearchContext);

    const filteredVacancy = vacancies.filter(
        (vacancy) => {
            return (
                vacancy
                    .name
                    .toLowerCase()
                    .includes(searchField.toLowerCase())
            )
        }
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchField(e.target.value);
    };

    function searchList() {
        return (
            <Box
                width={'100%'}
                display="grid"
                gridTemplateColumns="1fr 1fr"
                flexDirection={vacancies.length === 0 ? 'column' : 'row'}
                flexWrap={vacancies.length === 0 ? 'nowrap' : 'wrap'}
                alignItems={vacancies.length === 0 ? 'center' : 'flex-start'}
                justifyItems={'flex-start'}
                gap={vacancies.length === 0 ? '8px' : '20px'}
                paddingBottom="30px"
            >
                <SearchResults filteredVacancy={filteredVacancy} />
            </Box>
        );
    }

    return (
        <>
            <NavBar />
            <main>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '8px',
                    width: '100%'
                }}>
                    <Typography variant="subtitle1" fontWeight={500}>Вакансия</Typography>
                    <input
                        className={styles.input}
                        type="search"
                        onChange={handleChange}
                        placeholder="Например, Fronend разработчик" />
                </Box>
                {searchList()}
            </main>
        </>
    );
};