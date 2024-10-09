# opentelemetry-angular-example

## Setup

* Edit the [environments.ts](https://github.com/scoady/opentelemetry-angular-example/blob/68ca71c9b0e46e7cd9a69e79163c09259ae3e46b/hello-world-app/src/app/environment.ts#L18) file and update it with your ServiceNow Cloud Observability access token


* `ng serve`

* Open a browser at http://localhost:4200

* There should now be span traffic generated, noted in both the console and in the network tab.

```sh
Span started: Span2 {attributes: {…}, links: Array(0), events: Array(0), _droppedAttributesCount: 0, _droppedEventsCount: 0, …}
home.component.ts:19 Span ended: Span2 {attributes: {…}, links: Array(0), events: Array(0), _droppedAttributesCount: 0, _droppedEventsCount: 0, …}
... etc
```

## Cloud Observability

* Navigate to your project and start a notebook query for `service = angular-otel-demo`, which should then have samples recently collected.


