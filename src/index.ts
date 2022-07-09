import './style.css';
import { initializeStore } from './store/store';
import initializeEventListeners from './modals';

initializeStore();
initializeEventListeners();
