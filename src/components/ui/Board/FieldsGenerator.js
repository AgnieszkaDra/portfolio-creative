export default class FieldListGenerator {
    #fieldsList = [];
   
    breakpoints = [
      { width: 1200, rows: 10, cols: 10 },
      { width: 992, rows: 8, cols: 8 },
      { width: 768, rows: 6, cols: 6 },
      { width: 0, rows: 4, cols: 4 },
    ];
  
    constructor() {
      this.updateFieldsList();
    }
  
    getBreakpoint(windowWidth) {
      for (const breakpoint of this.breakpoints) {
        if (windowWidth >= breakpoint.width) {
          return breakpoint;
        }
      }
      return this.breakpoints[this.breakpoints.length - 1]; 
    }
  
    updateFieldsList = (breakpoint = 1) => {
      const windowWidth = window.innerWidth;
      const { rows, cols } = this.getBreakpoint(windowWidth);
  
      this.#fieldsList = Array.from({ length: rows * breakpoint }, (_, rowIndex) =>
        Array.from({ length: cols * breakpoint }, (_, colIndex) => {
          const baseValue = (rowIndex * cols) + (colIndex + 1)
          return baseValue
        })
      );
    };
  
    getFieldsList() {
      return this.#fieldsList;
    }
  }


