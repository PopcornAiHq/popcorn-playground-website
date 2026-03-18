import UnicornScene from "unicornstudio-react/next";

// documentation: https://www.npmjs.com/package/unicornstudio-react
export default function MyComponent() {
  return (
    <UnicornScene
      projectId="8piQu3B6rsUX3zy4aDoS"
      width="100vw"
      height="100vh"
      scale={1}
      dpi={1.5}
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.4/dist/unicornStudio.umd.js"
    />
  );
}