import createMenu from '../../components/menu/menu'

import 'normalize.css';
import './index.scss';

var menu = createMenu(['главная','блог', 'jopa'], 'menu');
document.body.appendChild(menu);

console.log('index.js');
console.log($);
console.log(jQuery);