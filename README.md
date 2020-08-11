# LighthouseTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

Run `npm install` to setup the project.

## Test Case Execution [ES2015]

1. `npm run serve-es2015`
2. `lighthouse --view http://localhost:4200/`

The report will indicate the `main.js` file is unminified.
`main.js` production on-disk file size: ~186 kB
(unoptimized size: ~2.32 MB)

## Test Case Execution [ES5]

1. `npm run serve-es5`
2. `lighthouse --view http://localhost:4200/`

The report will not contain an unminified JavaScript warning.
`main.js` production on-disk file size: ~220 kB
(unoptimized size: ~2.74 MB)

## ES2015 template string examples

Nested template strings appear to generate false positives.

* `template-string-example/bad.js` -> ~36% waste reported
* `template-string-example/good.js` -> ~3% waste reported

Use `npm run template-example` for token counts.

## ES2015 Angular main JavaScript file example

* `angular-main-example/main-fa50afb.js` -> ~30% waste reported
* `angular-main-example/main-05edef7.js` -> ~2% waste reported

The only difference is captured in the following diff (formatted for readability):
```diff
                     ? [serializeSegment(segment.children.primary, !1)]
                     : [`${k}:${serializeSegment(v, !1)}`]
                 );
-                return `${serializePaths(segment)}/(${children.join("//")})`;
+                return 1 === Object.keys(segment.children).length &&
+                  null != segment.children.primary
+                  ? `${serializePaths(segment)}/${children[0]}`
+                  : `${serializePaths(segment)}/(${children.join("//")})`;
               }
             })(tree.root, !0)
           }${(function (params) {
```
The addition of the above code appears to cause the audit to report the file as minified.

Use `npm run angular-example` for token counts.

## Waste estimator utility

Uses the minification-estimator within the `lighthouse` package to estimate a waste percentage.

Usage:
`node waste.js <file>`
