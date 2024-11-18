export default class DotCalculator {
    constructor() {
      this.breakpoints = [
        { width: 1200, dotCount: 6 },
        { width: 992, dotCount: 4 },
        { width: 768, dotCount: 2 },
        { width: 0, dotCount: 0}, 
      ];
    }
  
    calculate(windowWidth) {
      for (let i = 0; i < this.breakpoints.length; i++) {
        if (windowWidth >= this.breakpoints[i].width) {
          return this.breakpoints[i].dotCount;
        }
      }
      return this.breakpoints[this.breakpoints.length - 1].dotCount;
    }
  }