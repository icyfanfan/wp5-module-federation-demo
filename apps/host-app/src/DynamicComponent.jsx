import React from 'react';
import {useDynamicScript} from './useDynamicScript';

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    console.log(scope, module);
    const factory = await window[scope].get(module);
    const Module = factory();
    console.log(Module);
    
    return Module;
  };
}

export function DynamicComponent(props) {
  const { meta } = props;
  const { ready, failed } = useDynamicScript({
    url: meta && meta.url,
  });

  if (!meta) {
    return <h2>Not Component selected</h2>;
  }


  if (!ready) {
    return <h2>Loading dynamic script: {meta.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {meta.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(meta.scope, meta.module)
  );

  return (
    <React.Suspense fallback="Loading...">
      <Component />
    </React.Suspense>
  );
}