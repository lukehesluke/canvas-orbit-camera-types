declare module 'orbit-camera' {
  import { ReadonlyVec3, vec3, quat, mat4 } from 'gl-matrix';

  class OrbitCamera {
    rotation: quat;
    center: vec3;
    distance: number;

    view(out?: mat4): mat4;
    lookAt(eye: ReadonlyVec3, center: ReadonlyVec3, up: ReadonlyVec3): void;
    pan(dpan: ReadonlyVec3): void;
    zoom(d: number): void;
    rotate(da: ReadonlyVec3, db: ReadonlyVec3): void;
  }

  function createOrbitCamera(eye?: ReadonlyVec3 | null, target?: ReadonlyVec3 | null, up?: ReadonlyVec3 | null): OrbitCamera;

  export = createOrbitCamera;
}
