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
      url: 'https://ingest.lightstep.com:443/v1/traces',  // Your OpenTelemetry Collector URL
      headers: {
        'Lightstep-Access-Token': '+DTfN7wJFd0gCR5qnVwR3YgX+PS8x90uPsub0OgED9UT2CRXWfRYydBwiQRDHlod5G79Z7RNlxqbuf20H2NgIXlP6e64CVTYFhoIyh22'
      }
    })
  )
);

// Make sure the tracer provider is registered
provider.register();

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
