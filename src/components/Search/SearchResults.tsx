import React from 'react';
import { Vacancy } from '../../utils/mock/vacancies';
import VacancyCard from '../Card/Card';
import { useLocation } from 'react-router-dom';

interface SearchResultsProps {
  filteredVacancy: Vacancy[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ filteredVacancy }) => {
  let filtered: JSX.Element[] = [];
  const location = useLocation();

  if (location.pathname === '/vacancies/active') {
    filtered = filteredVacancy.filter((vacancy) => !vacancy.is_archived)
      .map((vacancy) => (
        <VacancyCard key={vacancy.id} card={vacancy}/>
      ));
  } else {
    filtered = filteredVacancy.filter((vacancy) => vacancy.is_archived)
    .map((vacancy) => (
      <VacancyCard key={vacancy.id} card={vacancy}/>
    ));
  }

  return <>{filtered}</>;
};

export default SearchResults;