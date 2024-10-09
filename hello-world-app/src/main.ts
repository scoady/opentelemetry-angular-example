import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

const provider = new WebTracerProvider();
provider.addSpanProcessor(
  new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: 'https://ingest.lightstep.com:443/v1/traces',  // Your OpenTelemetry Collector URL, in this case, a public OTLP endpoin
      headers: {
        'Lightstep-Access-Token': 'YOUR_ACCESS_TOKEN',  // Your Lightstep Access Token
      }
    })
  )
);

// Make sure the tracer provider is registered
provider.register();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
