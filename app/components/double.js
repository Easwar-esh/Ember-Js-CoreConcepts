import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DoubleComponent extends Component {
  @tracked multiple = 1;

  @action
  double() {
    this.multiple = this.multiple * 2;
  }
}
