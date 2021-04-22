import Route from '@ember/routing/route';
import { products } from '../data';

export default class IndexRoute extends Route {
  model() {
    return products;
  }
}
