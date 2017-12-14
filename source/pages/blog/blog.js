import createMenu from '../../components/menu/menu';
import 'normalize.css';
import './blog.scss';
var menu = createMenu(['главная','блог'], 'menu');
document.body.appendChild(menu);

console.log('blog.js');