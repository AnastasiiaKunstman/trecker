export const phoneRegExp = /^(\+7)\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/;
export const passwordRegExp = {};

export const pages = [
    {
        name: 'Подбор кандидатов',
        path: '/students',
        id: 1,
    },
    {
        name: 'Мои вакансии',
        path: '/vacancies/active',
        id: 2,
    },
];

interface TabConfig {
    label: string;
    path: string;
}

export const tabConfig: TabConfig[] = [
    {
        label: 'Создать вакансию',
        path: '/vacancies',
    },
    {
        label: 'Активные',
        path: '/vacancies/active',
    },
    {
        label: 'Архив',
        path: '/vacancies/archive',
    },
];

export const tableTabConfig: TabConfig[] = [
    {
        label: 'Новые',
        path: '/students/',
    },
    {
        label: 'Просмотренные',
        path: '/students/viewed',
    },
    {
        label: 'Приглашенные',
        path: '/students/invited',
    },
    {
        label: 'Избранное',
        path: '/students/save',
    },
];

export const longText = 'Анализ текста резюме при помощи нейросети. AI отметит важные моменты и проверит соответствие резюме под вакансию.';

