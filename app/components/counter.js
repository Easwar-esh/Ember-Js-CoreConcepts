// import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';

// export default class CounterComponent extends Component {
//   @tracked count = 0;
// }

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CounterComponent extends Component {
  @tracked count = 0;
  @action
  change(amount) {
    this.count += amount;
  }
  @action
  increment() {
    this.count = this.count + 1;
  }

  @action
  decrement() {
    this.count = this.count - 1;
  }
}
