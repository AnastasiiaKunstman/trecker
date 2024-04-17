import { createContext } from "react";
import { Vacancy } from "../utils/mock/vacancies";

interface SearchContextProps {
  vacancies: Vacancy[];
  moveToArchive?: (vacancyId: number) => void;
}

export const SearchContext = createContext<SearchContextProps>({ vacancies: [] });