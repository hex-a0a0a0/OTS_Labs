/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import WelcomePage from './WelcomePage';

render(() => <WelcomePage />, document.querySelector('body'));
