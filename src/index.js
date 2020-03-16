import _ from 'lodash';
import Tiger from './utilities';

console.log(Tiger.say());

const component = () => {
  const element = document.createElement('div');
  const array = ['hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
};

document.body.appendChild(component());
