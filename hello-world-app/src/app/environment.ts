import { OpenTelemetryConfig } from '@jufab/opentelemetry-angular-interceptor';
import { DiagLogLevel } from '@opentelemetry/api';

export const environment = {
  production: false,
  opentelemetryConfig: {
    commonConfig: {
      console: true,  // Set to true to log traces to console for debugging
      production: false,
      serviceName: 'angular-otel-demo',
      probabilitySampler: '1.0',
      logLevel: DiagLogLevel.ALL,
      logBody: true,
    },
    otelcolConfig: {
      url: 'https://ingest.lightstep.com:443/v1/traces',
      headers: {
        'Lightstep-Access-Token': "YOUR_ACCESS_TOKEN",
      },
    },
  } as OpenTelemetryConfig,
};
