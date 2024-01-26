declare module 'three-orbit-controls';
declare module 'three' {
    export class GLTFLoader extends Loader {
      constructor();
      load(url: string, onLoad: (gltf: GLTF) => void, onProgress?: (event: ProgressEvent) => void, onError?: (event: ErrorEvent) => void): void;
    }
   }