const specializations = [
  {
    id: 2,
    name: 'Дизайн',
  },
  {
    id: 3,
    name: 'Маркетинг',
  },
  {
    id: 4,
    name: 'Тестирование',
  },
  {
    id: 1,
    name: 'Программирование',
  },
  {
    id: 5,
    name: 'Анализ данных',
  },
];

const skills = [
  {
    id: 1,
    name: 'Angular.js',
  },
  {
    id: 2,
    name: 'Ansible',
  },
  {
    id: 3,
    name: 'C',
  },
  {
    id: 4,
    name: 'C#',
  },
  {
    id: 5,
    name: 'C++',
  },
  {
    id: 6,
    name: 'CI/CD',
  },
  {
    id: 7,
    name: 'CSS',
  },
  {
    id: 8,
    name: 'Django',
  },
  {
    id: 9,
    name: 'Docker',
  },
  {
    id: 10,
    name: 'ElasticSearch',
  },
  {
    id: 11,
    name: 'ELK',
  },
  {
    id: 12,
    name: 'fastapi',
  },
  {
    id: 13,
    name: 'Flask',
  },
  {
    id: 14,
    name: 'Git',
  },
  {
    id: 15,
    name: 'Go',
  },
  {
    id: 16,
    name: 'Groovy',
  },
  {
    id: 17,
    name: 'HTML',
  },
  {
    id: 18,
    name: 'Java',
  },
  {
    id: 19,
    name: 'JavaScript',
  },
  {
    id: 20,
    name: 'Jenkins',
  },
  {
    id: 21,
    name: 'Kafka',
  },
  {
    id: 22,
    name: 'Kotlin',
  },
  {
    id: 23,
    name: 'Kubernetes',
  },
  {
    id: 24,
    name: 'Laravel',
  },
  {
    id: 25,
    name: 'NestJS',
  },
  {
    id: 26,
    name: 'Node.JS',
  },
  {
    id: 27,
    name: 'Perl',
  },
  {
    id: 28,
    name: 'PHP',
  },
  {
    id: 29,
    name: 'Python',
  },
  {
    id: 30,
    name: 'React',
  },
  {
    id: 31,
    name: 'Revel',
  },
  {
    id: 32,
    name: 'Ruby',
  },
  {
    id: 33,
    name: 'SQL',
  },
  {
    id: 34,
    name: 'Swift',
  },
  {
    id: 35,
    name: 'Terraform',
  },
  {
    id: 36,
    name: 'TypeScript',
  },
  {
    id: 37,
    name: 'Ubuntu',
  },
  {
    id: 38,
    name: 'Vue.js',
  },
  {
    id: 39,
    name: 'Yii framework',
  },
  {
    id: 40,
    name: 'Apache',
  },
  {
    id: 41,
    name: 'AWS',
  },
  {
    id: 42,
    name: 'Consul',
  },
  {
    id: 43,
    name: 'GitLab',
  },
  {
    id: 44,
    name: 'Grafana',
  },
  {
    id: 45,
    name: 'IaC',
  },
  {
    id: 46,
    name: 'Kibana (ELK)',
  },
  {
    id: 47,
    name: 'LAMP',
  },
  {
    id: 48,
    name: 'Linux',
  },
  {
    id: 49,
    name: 'Microsoft Azure',
  },
  {
    id: 50,
    name: 'MobX',
  },
  {
    id: 51,
    name: 'MongoDB',
  },
  {
    id: 52,
    name: 'New Relic',
  },
  {
    id: 53,
    name: 'Nginx',
  },
  {
    id: 54,
    name: 'Nomad',
  },
  {
    id: 55,
    name: 'Oracle',
  },
  {
    id: 56,
    name: 'PHP',
  },
  {
    id: 57,
    name: 'PostgreSQL',
  },
  {
    id: 58,
    name: 'Prometheus',
  },
  {
    id: 59,
    name: 'Redis',
  },
  {
    id: 60,
    name: 'SQL',
  },
  {
    id: 61,
    name: 'Terraform',
  },
  {
    id: 62,
    name: 'Terragrunt',
  },
  {
    id: 63,
    name: 'Ubuntu',
  },
  {
    id: 64,
    name: 'Vault',
  },
  {
    id: 65,
    name: 'Webix',
  },
  {
    id: 66,
    name: 'Websocket',
  },
  {
    id: 67,
    name: 'Windows',
  },
  {
    id: 68,
    name: 'Yandex.Cloud',
  },
  {
    id: 69,
    name: 'Zabbix',
  },
  {
    id: 70,
    name: '3D Max',
  },
  {
    id: 71,
    name: '3D studio',
  },
  {
    id: 72,
    name: 'Adobe After Effects',
  },
  {
    id: 73,
    name: 'Adobe Illustrator',
  },
  {
    id: 74,
    name: 'Adobe XD',
  },
  {
    id: 75,
    name: 'Arnold',
  },
  {
    id: 76,
    name: 'Axure',
  },
  {
    id: 77,
    name: 'Blender',
  },
  {
    id: 78,
    name: 'Cinema 4D',
  },
  {
    id: 79,
    name: 'ColorHexa',
  },
  {
    id: 80,
    name: 'Figma',
  },
  {
    id: 81,
    name: 'Houdini',
  },
  {
    id: 82,
    name: 'Lightroom classic',
  },
  {
    id: 83,
    name: 'Maya',
  },
  {
    id: 84,
    name: 'Photoshop',
  },
  {
    id: 85,
    name: 'Revit',
  },
  {
    id: 86,
    name: 'Sketch',
  },
  {
    id: 87,
    name: 'UI',
  },
  {
    id: 88,
    name: 'UX',
  },
  {
    id: 89,
    name: 'Bitrix24',
  },
  {
    id: 90,
    name: 'Excel',
  },
  {
    id: 91,
    name: 'Facebook Ads Manager',
  },
  {
    id: 92,
    name: 'Google AdWords',
  },
  {
    id: 93,
    name: 'Google Analytics',
  },
  {
    id: 94,
    name: 'MyTarget',
  },
  {
    id: 95,
    name: 'Power BI',
  },
  {
    id: 96,
    name: 'Power Query',
  },
  {
    id: 97,
    name: 'Scrum',
  },
  {
    id: 98,
    name: 'SEO',
  },
  {
    id: 99,
    name: 'SMM',
  },
  {
    id: 100,
    name: 'Trello',
  },
  {
    id: 101,
    name: 'МарТех',
  },
  {
    id: 102,
    name: 'Яндекс Метрика',
  },
  {
    id: 103,
    name: 'Яндекс.Директ',
  },
];

const educationLevels = [
  {
    id: 1,
    name: 'Intern',
  },
  {
    id: 2,
    name: 'Junior',
  },
  {
    id: 3,
    name: 'Middle',
  },
];

const schedules = [
  {
    id: 1,
    name: 'Полный рабочий день',
  },
  {
    id: 2,
    name: 'Гибкий график',
  },
  {
    id: 3,
    name: 'Удаленная работа',
  },
  {
    id: 4,
    name: 'Частичная занятость',
  },
  {
    id: 5,
    name: 'Гибрид',
  },
];

const locations = [
  {
    id: 1,
    name: 'Москва',
  },
  {
    id: 2,
    name: 'Санкт-Петербург',
  },
  {
    id: 3,
    name: 'Новосибирск',
  },
  {
    id: 4,
    name: 'Екатеринбург',
  },
  {
    id: 5,
    name: 'Казань',
  },
  {
    id: 6,
    name: 'Нижний Новгород',
  },
  {
    id: 7,
    name: 'Красноярск',
  },
  {
    id: 8,
    name: 'Челябинск',
  },
  {
    id: 9,
    name: 'Самара',
  },
  {
    id: 10,
    name: 'Уфа',
  },
  {
    id: 11,
    name: 'Ростов-на-Дону',
  },
  {
    id: 12,
    name: 'Краснодар',
  },
  {
    id: 13,
    name: 'Омск',
  },
  {
    id: 14,
    name: 'Воронеж',
  },
  {
    id: 15,
    name: 'Пермь',
  },
  {
    id: 16,
    name: 'Волгоград',
  },
  {
    id: 17,
    name: 'Саратов',
  },
  {
    id: 18,
    name: 'Тюмень',
  },
  {
    id: 19,
    name: 'Владивосток',
  },
  {
    id: 20,
    name: 'Тольятти',
  },
  {
    id: 21,
    name: 'Барнаул',
  },
  {
    id: 22,
    name: 'Махачкала',
  },
  {
    id: 23,
    name: 'Ижевск',
  },
  {
    id: 24,
    name: 'Хабаровск',
  },
];

export {
  locations, schedules, educationLevels, specializations, skills,
};

export interface Locations {
  id: number
  name: string
}

export interface Schedule {
  id: number
  name: string
}

export interface Skills {
  id: number
  name: string
}

export interface Specializations {
  id: number
  name: string
}

export interface EducationLevels {
  id: number
  name: string
}

export interface TSelectedOpt {
  id: number
  name: string
}