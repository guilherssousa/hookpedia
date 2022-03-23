---
templateKey: post
title: useKeyPress
date: "2018-11-14"
gist: https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5
sandbox: https://codesandbox.io/s/5v71vl72kk
isMultilingual: true
tags: []
links:
  - url: https://codesandbox.io/s/y3qzyr3lrz
    name: useMultiKeyPress
    description:
      Um fork de um hook feito por <a target="_blank" rel="noreferrer" href="https://twitter.com/jhsu">@jhsu</a>
      que detecta multiplas teclas de uma vez.
---

Esse hook deixa fácil detectar quando o usuário pressiona uma tecla específica no seu teclado. Sinta-se livre para compartilhar suas modificações [neste gist](https://gist.github.com/gragland/b61b8f46114edbcf2a9e4bd5eb9f47f5).

```jsx
import { useState, useEffect } from "react";
// Usage
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress("h");
  const sadPress = useKeyPress("s");
  const robotPress = useKeyPress("r");
  const foxPress = useKeyPress("f");
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState < boolean > false;
  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
```

```typescript
import { useState, useEffect } from "react";
// Usage
function App() {
  // Call our hook for each key that we'd like to monitor
  const happyPress: boolean = useKeyPress("h");
  const sadPress: boolean = useKeyPress("s");
  const robotPress: boolean = useKeyPress("r");
  const foxPress: boolean = useKeyPress("f");
  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && "😊"}
        {sadPress && "😢"}
        {robotPress && "🤖"}
        {foxPress && "🦊"}
      </div>
    </div>
  );
}
// Hook
function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
```
