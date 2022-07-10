import { elements } from './elements';

export default function initializeTheme() {
  const { toggle, dark, light } = elements.theme;

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    light.classList.remove('hidden');
    document.documentElement.classList.add('dark');
  } else {
    dark.classList.remove('hidden');
    document.documentElement.classList.add('light');
  }

  toggle.onclick = () => {
    dark.classList.toggle('hidden');
    light.classList.toggle('hidden');

    const usersPreference = localStorage.getItem('color-theme');

    if (usersPreference === 'dark') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      return localStorage.setItem('color-theme', 'light');
    }

    if (usersPreference === 'light') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      return localStorage.setItem('color-theme', 'dark');
    }

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      return localStorage.setItem('color-theme', 'light');
    }

    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
    return localStorage.setItem('color-theme', 'dark');
  };
}
