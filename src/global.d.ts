// global.d.ts
interface TawkAPI {
  maximize: () => void;
}

interface Window {
  Tawk_API?: TawkAPI;
}
