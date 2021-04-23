import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  @tracked itemList = [];

  addItem(item) {
    const existingItem = this.itemList.find(({ name, color }) => {
      return name === item.name && color === item.color;
    });

    if (existingItem) {
      existingItem.count += 1;
    } else {
      this.itemList = [
        ...this.itemList,
        {
          ...item,
          count: 1,
        },
      ];
    }
  }
}
