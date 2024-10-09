import { Component, OnInit } from '@angular/core';
import { trace } from '@opentelemetry/api';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Hello World</h1>`,
})
export class HomeComponent implements OnInit {

  ngOnInit() {
    const tracer = trace.getTracer('example-tracer');
    const span = tracer.startSpan('manual-span-test'); // Start a custom span
    console.log('Span started:', span);

    // Simulate some work
    setTimeout(() => {
      span.end(); // End the span
      console.log('Span ended:', span);
    }, 1000);
  }
}
