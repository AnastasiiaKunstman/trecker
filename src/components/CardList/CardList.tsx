import { useState } from 'react';
import vacancyList, { Vacancy } from '../../utils/mock/vacancies';
import { SearchForm } from '../Search/SearchForm/SearchForm';
import { SearchContext } from '../../context/SearchContext';

function CardList() {
    const [vacancies, setVacancies] = useState<Vacancy[]>(vacancyList);

    // Функция для перемещения вакансии в архив
    const moveToArchive = (vacancyId: number) => {
        const updatedVacancies = vacancies.map(vacancy => {
            if (vacancy.id === vacancyId) {
                return { ...vacancy, is_archived: true };
            }
            return vacancy;
        });
        setVacancies(updatedVacancies);
    }

    return (
        <SearchContext.Provider value={{ vacancies, moveToArchive }}>
            <SearchForm />
        </SearchContext.Provider>
    )
}

export default CardList;