import { createContext } from "react";
import { Students } from "../utils/mock/students";

interface StudentContextProps {
    results: Students[];
}

export const StudentContext = createContext<StudentContextProps>({ results: [] });