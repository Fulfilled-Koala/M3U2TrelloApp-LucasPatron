import './style.css';
import { initializeStore } from './api/store';
import initializeEventListeners from './modals';

initializeStore();
initializeEventListeners();
