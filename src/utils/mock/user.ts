export interface IProfile {
  id: number;
  email: string;
  avatar?: string;
  password?: number;
  first_name: string;
  last_name: string;
  telegram: string;
  company: string;
  phone_number: string;
  is_active: boolean
}

export const user = {
  id: 2,
  email: 'a@a.ru',
  password: 1,
  avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  first_name: 'Admin',
  last_name: 'Test',
  telegram: 'https://t.me',
  phone_number: '88005550030',
  company: 'Sber Tex',
  is_active: true,
};
