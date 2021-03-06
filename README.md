# This is a demo for a Chromium / Electron issue.

## Issue

See https://github.com/electron/electron/issues/26903 for the full issue description.

Opening devtools while a WASM file is being loaded into `compileStreaming` or `instantiateStreaming`
hangs the process.

## To reproduce on Chromium

1. Run `node pure-server.js` (or `npm start`).

2. Open `http://127.0.0.1:8080/`. Within 10 seconds (a parameter), open devtools.

3. Observe the hang. Try typing something into devtools.

Notes:

* Closing devtools doesn't help.

* Waiting until the response finishes loading doesn't help.

* This issue doesn't happen without opening devtools while WASM is being loaded.

Putting CPU under pressure is not required in this testcase (unlike the testcase below).

## To reproduce the original testcase in Electron:

1. Put CPU under pressure for this to be more easily reproducable, e.g. with \
   `sysbench cpu --time=10000000 --threads=96 run` (adjust for your number of threads).

2. Run `electron --enable-logging main.js` or just `npm it`.

3. Observe the hang. Try typing something into devtools.

## License

`d3wasm.wasm` taken from [d3wasm](https://github.com/gabrielcuvillier/d3wasm) project
([direct link](https://wasm.continuation-labs.com/d3demo/d3wasm.wasm)) and is licenensed under
GNU GPL v3.0.
