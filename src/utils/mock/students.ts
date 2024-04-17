interface Location {
  id: number;
  name: string;
}

interface Schedule {
  id: number;
  name: string;
}

interface Skill {
  id: number;
  name: string;
}

interface EducationLevel {
  id: number;
  name: string;
}

interface Specialization {
  id: number;
  name: string;
}

export interface Students {
  id: number;
  avatar?: string | null;
  last_name: string;
  first_name: string;
  email: string;
  location: Location;
  telegram: string;
  schedule: Schedule[];
  skills: Skill[];
  required_education_level?: EducationLevel[];
  specialization?: Specialization[];
  is_favorited: boolean;
}

const results = [
  {
    id: 1,
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Невский',
    first_name: 'Данил',
    email: 'anarant91@gmail.com',
    location: {
      id: 1,
      name: 'Москва',
    },
    telegram: 'http://t.me/dnevskiy',
    specialization: [
      {
        id: 1,
        name: 'Программирование',
      }
    ],
    required_education_level: [
      {
        id: 2,
        name: 'Junior',
      }
    ],
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
    skills: [
      {
        id: 8,
        name: 'Django',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 29,
        name: 'Python',
      },
      {
        id: 33,
        name: 'SQL',
      },
      {
        id: 48,
        name: 'Linux',
      },
    ],
    is_favorited: true,
  },
  {
    id: 2,
    avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Иванов',
    first_name: 'Иван',
    email: 'ivan@example.com',
    location: {
      id: 2,
      name: 'Санкт-Петербург',
    },
    telegram: 'http://t.me/ivan_ivanov',
    schedule: [
      {
        id: 3,
        name: 'Удаленная работа',
      },
    ],
    skills: [
      {
        id: 8,
        name: 'Django',
      },
      {
        id: 12,
        name: 'fastapi',
      },
      {
        id: 15,
        name: 'Go',
      },
      {
        id: 29,
        name: 'Python',
      },
      {
        id: 59,
        name: 'Redis',
      },
    ],
    is_favorited: true,
  },
  {
    id: 3,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Сидорова',
    first_name: 'Мария',
    email: 'maria@example.com',
    location: {
      id: 3,
      name: 'Новосибирск',
    },
    telegram: 'http://t.me/maria_sidorova',
    schedule: [
      {
        id: 1,
        name: 'Полный рабочий день',
      },
      {
        id: 2,
        name: 'Гибкий график',
      },
    ],
    skills: [
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 12,
        name: 'fastapi',
      },
      {
        id: 29,
        name: 'Python',
      },
      {
        id: 32,
        name: 'Ruby',
      },
      {
        id: 37,
        name: 'Ubuntu',
      },
    ],
    is_favorited: true,
  },
  {
    id: 4,
    avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Петрова',
    first_name: 'Анна',
    email: 'anna@example.com',
    location: {
      id: 4,
      name: 'Екатеринбург',
    },
    telegram: 'http://t.me/anna_petrova',
    schedule: [],
    skills: [],
    is_favorited: true,
  },
  {
    id: 5,
    avatar: 'https://images.unsplash.com/photo-1599566147214-ce487862ea4f?q=80&w=1847&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Семенов',
    first_name: 'Петр',
    email: 'petr@example.com',
    location: {
      id: 5,
      name: 'Казань',
    },
    telegram: 'http://t.me/petr_semenov',
    schedule: [
      {
        id: 4,
        name: 'Частичная занятость',
      },
    ],
    skills: [],
    is_favorited: false,
  },
  {
    id: 6,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Иванова',
    first_name: 'Елена',
    email: 'elena@example.com',
    location: {
      id: 6,
      name: 'Нижний Новгород',
    },
    telegram: 'http://t.me/elena_ivanova',
    schedule: [
      {
        id: 1,
        name: 'Полный рабочий день',
      },
    ],
    skills: [
      {
        id: 7,
        name: 'CSS',
      },
      {
        id: 14,
        name: 'Git',
      },
      {
        id: 17,
        name: 'HTML',
      },
      {
        id: 30,
        name: 'React',
      },
      {
        id: 36,
        name: 'TypeScript',
      },
    ],
    is_favorited: false,
  },
  {
    id: 7,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Смирнов',
    first_name: 'Сергей',
    email: 'sergey@example.com',
    location: {
      id: 7,
      name: 'Красноярск',
    },
    telegram: 'http://t.me/sergey_smirnov',
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
    skills: [],
    is_favorited: false,
  },
  {
    id: 8,
    avatar: null,
    last_name: 'Морозова',
    first_name: 'Ольга',
    email: 'olga@example.com',
    location: {
      id: 8,
      name: 'Челябинск',
    },
    telegram: 'http://t.me/olga_morozova',
    schedule: [
      {
        id: 5,
        name: 'Гибрид',
      },
    ],
    skills: [],
    is_favorited: false,
  },
  {
    id: 9,
    avatar: null,
    last_name: 'Козлов',
    first_name: 'Алексей',
    email: 'alex@example.com',
    location: {
      id: 1,
      name: 'Москва',
    },
    telegram: 'http://t.me/alex_kozlov',
    schedule: [
      {
        id: 1,
        name: 'Полный рабочий день',
      },
    ],
    skills: [],
    is_favorited: false,
  },
  {
    id: 10,
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    last_name: 'Павлова',
    first_name: 'Наталья',
    email: 'natalia@example.com',
    location: {
      id: 1,
      name: 'Москва',
    },
    telegram: 'http://t.me/natalia_pavlova',
    schedule: [
      {
        id: 3,
        name: 'Удаленная работа',
      },
      {
        id: 5,
        name: 'Гибрид',
      },
    ],
    skills: [
      {
        id: 7,
        name: 'CSS',
      },
      {
        id: 9,
        name: 'Docker',
      },
      {
        id: 14,
        name: 'Git',
      },
      {
        id: 17,
        name: 'HTML',
      },
      {
        id: 30,
        name: 'React',
      },
      {
        id: 36,
        name: 'TypeScript',
      },
    ],
    is_favorited: false,
  },
];

export default results;
