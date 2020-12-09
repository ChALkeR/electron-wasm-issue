# This is a demo for an Electron issue.

## Issue

See https://github.com/electron/electron/issues/26903 for the full issue description.

## To reproduce:

1. Put CPU under pressure for this to be more easily reproducable, e.g. with \
   `sysbench cpu --time=10000000 --threads=96 run` (adjust for your number of threads).

2. Run `electron --enable-logging main.js` or just `npm it`.

3. Observe the hang. Try typing something into devtools.

## License

`d3wasm.wasm` taken from [d3wasm](https://github.com/gabrielcuvillier/d3wasm) project
([direct link](https://wasm.continuation-labs.com/d3demo/d3wasm.wasm) and is licenensed under
GPU GPL v3.0.
