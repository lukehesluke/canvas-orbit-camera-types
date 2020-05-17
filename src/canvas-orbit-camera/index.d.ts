declare module 'canvas-orbit-camera' {
  import createOrbitCamera = require('orbit-camera');

  type CanvasOrbitCamera = ReturnType<typeof createOrbitCamera> & {
    // Note that this is an instance property, not a prototype method
    // `canvas-orbit-camera` creates an OrbitCamera instance and then adds
    // a `tick()` function to it.
    tick: () => void;
  };

  function attachCamera(canvas: HTMLCanvasElement, opts?: {
    pan?: boolean,
    scale?: boolean,
    rotate?: boolean,
  }): CanvasOrbitCamera;

  export = attachCamera;
}
