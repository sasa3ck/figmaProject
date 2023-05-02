import { makeAutoObservable } from "mobx";

class SwitchSlider {
  yearOrMonth = false;

  constructor() {
    makeAutoObservable(this);
  }

  changeYearOrMonth() {
    this.yearOrMonth = !this.yearOrMonth;
  }
}

export default new SwitchSlider();
