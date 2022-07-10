import './style.css';
import initializeStore from './store';
import initializeEventListeners from './modals';
import initializeTheme from './utils/theme';

initializeStore();
initializeEventListeners();
initializeTheme();
