export interface BarGraphOptions {
    data: number[];
    labels: string[];
    container: HTMLElement;
  }
  
  export class BarGraph {
    private options: BarGraphOptions;
  
    constructor(options: BarGraphOptions) {
      this.options = options;
    }
  
    render(): void {
      const { data, labels, container } = this.options;
  
      // Clear container
      container.innerHTML = '';
  
      // Create bars
      data.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 10}px`; // Just a simple scaling for demonstration
        bar.textContent = labels[index];
        container.appendChild(bar);
      });
    }
  }
  