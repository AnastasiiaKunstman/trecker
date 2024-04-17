export interface Location {
    id: number;
    name: string;
}

export interface Specialization {
    id: number;
    name: string;
}

export interface Schedule {
    id: number;
    name: string;
}

export interface RequiredEducationLevel {
    id: number;
    name: string;
}

export interface RequiredSkill {
    id: number;
    name: string;
}

export interface Vacancy {
    id: number;
    name: string;
    author?: number;
    location: Location;
    pub_date: string;
    salary: string;
    schedule: Schedule[];
    specialization?: Specialization[];
    required_education_level: RequiredEducationLevel[];
    required_skills: RequiredSkill[];
    text?: string
    is_archived: boolean
}

export interface Card {
    id: number;
    name: string;
    location: Location;
    pub_date: string;
    salary: string;
    schedule: Schedule[];
    required_education_level: RequiredEducationLevel[];
    required_skills: RequiredSkill[];
}

const vacancyList = [
    {
        id: 15,
        name: 'Тестер',
        author: 2,
        location: {
            id: 4,
            name: 'Екатеринбург',
        },
        pub_date: '2023-11-29T12:30:13.431263Z',
        salary: '35 000',
        schedule: [],
        required_education_level: [],
        required_skills: [],
        is_archived: false,
    },
    {
        id: 13,
        name: 'Дизайнер',
        author: 2,
        location: {
            id: 20,
            name: 'Тольятти',
        },
        pub_date: '2023-11-29T12:30:13.431263Z',
        salary: 'от 20 000',
        schedule: [
            {
                id: 4,
                name: 'Частичная занятость',
            },
        ],
        specialization: [
            {
                id: 2,
                name: 'Дизайн',
            },
        ],
        required_education_level: [
            {
                id: 1,
                name: 'Intern',
            },
        ],
        required_skills: [
            {
                id: 10,
                name: 'ElasticSearch',
            },
            {
                id: 19,
                name: 'JavaScript',
            },
        ],
        text: ' Разработка концепции дизайна и создание прототипов продукта для проверки идеи и получения обратной связи от пользователей. Создание пользовательского интерфейса.',
        is_archived: false,
    },
    {
        id: 132,
        name: 'Дизайнер',
        author: 2,
        location: {
            id: 13,
            name: 'Омск',
        },
        pub_date: '2023-11-29T12:30:13.431263Z',
        salary: 'от 30 000',
        schedule: [
            {
                id: 4,
                name: 'Частичная занятость',
            },
        ],
        specialization: [
            {
                id: 2,
                name: 'Дизайн',
            },
        ],
        required_education_level: [
            {
                id: 1,
                name: 'Intern',
            },
        ],
        required_skills: [
            {
                id: 10,
                name: 'ElasticSearch',
            },
            {
                id: 15,
                name: 'Go',
            },
            {
                id: 19,
                name: 'JavaScript',
            },
        ],
        text: 'Разработка концепции дизайна и создание прототипов продукта для проверки идеи и получения обратной связи от пользователей. Создание пользовательского интерфейса, включая разметку страниц, элементы управления, иконки, изображения и другие визуальные элементы с учетом лучших практик UI/UX дизайна. Оптимизация пути пользовательского взаимодействия с продуктом, улучшение удобства использования и удовлетворенности клиентов. Работа в рамках установленных сроков, а также соблюдение стандартов и правил дизайна компании или отрасли.',
        is_archived: false,
    },
    {
        id: 151,
        name: 'Тестовая вакансия',
        author: 2,
        location: {
            id: 4,
            name: 'Екатеринбург',
        },
        pub_date: '2023-12-29T08:07:22.704725Z',
        salary: 'oт 3 млрд долларов',
        schedule: [],
        required_education_level: [],
        required_skills: [],
        is_archived: false,
    },
    {
        id: 1,
        name: 'Нужен человек-оркестр',
        author: 2,
        location: {
            id: 23,
            name: 'Ижевск',
        },
        pub_date: '2023-11-10T02:41:17.238219Z',
        salary: '500 000',
        schedule: [
            {
                id: 1,
                name: 'Полный рабочий день',
            },
            {
                id: 3,
                name: 'Удаленная работа',
            },
        ],
        required_education_level: [
            {
                id: 2,
                name: 'Junior',
            },
            {
                id: 3,
                name: 'Middle',
            },
        ],
        required_skills: [
            {
                id: 1,
                name: 'Angular.js',
            },
            {
                id: 5,
                name: 'C++',
            },
            {
                id: 9,
                name: 'Docker',
            },
            {
                id: 42,
                name: 'Consul',
            },
            {
                id: 44,
                name: 'Grafana',
            },
            {
                id: 82,
                name: 'Lightroom classic',
            },
            {
                id: 93,
                name: 'Google Analytics',
            },
            {
                id: 99,
                name: 'SMM',
            },
            {
                id: 102,
                name: 'Яндекс Метрика',
            },
        ],
        is_archived: true,
    },
    {
        id: 131,
        name: 'Frontend разработчик',
        author: 2,
        location: {
            id: 3,
            name: 'Новосибирск',
        },
        pub_date: '2023-11-29T12:30:13.431263Z',
        salary: 'от 50 000',
        schedule: [
            {
                id: 4,
                name: 'Частичная занятость',
            },
        ],
        specialization: [
            {
                id: 1,
                name: 'Программирование',
            },
        ],
        required_education_level: [
            {
                id: 2,
                name: 'Junior',
            },
        ],
        required_skills: [
            {
                id: 1,
                name: 'Angular.js',
            },
            {
                id: 9,
                name: 'Docker',
            },
            {
                id: 19,
                name: 'JavaScript',
            },
            {
                id: 17,
                name: 'HTML',
            },
            {
                id: 14,
                name: 'Git',
            },
        ],
        text: 'Разработка пользовательских интерфейсов. Верстка по макетам Figma',
        is_archived: false,
    },
];

export default vacancyList;
