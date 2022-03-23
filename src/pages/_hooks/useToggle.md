---
templateKey: post
title: useToggle
date: "2020-12-02"
gist: https://gist.github.com/nikasepiskveradze/9db51bc37e1c87974528b7bc47b5268c
sandbox: https://codesandbox.io/s/recursing-cori-ckw8p
isMultilingual: true
---

Basicamente, o que esse hook faz é, receber um parâmetro com um valor booleano e alternar esse valor para seu oposto.
É útil quando queremos simular alguma ação para sua ação oposta, como por exemplo: Exibir e esconder modals, exibir mais ou menos texto, etc.

```jsx
import { useCallback, useState } from "react";

// Usage
function App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </button>
  );
}

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Define and memorize toggler function in case we pass down the component,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback(() => setState((state) => !state), []);

  return [state, toggle];
};
```

```typescript
import { useCallback, useState } from "react";

// Usage
function App() {
  // Call the hook which returns, current value and the toggler function
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <button onClick={setIsTextChanged}>
      {isTextChanged ? "Toggled" : "Click to Toggle"}
    </button>
  );
}

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState: boolean = false): [boolean, any] => {
  // Initialize the state
  const [state, setState] = useState<boolean>(initialState);

  // Define and memorize toggler function in case we pass down the comopnent,
  // This function change the boolean value to it's opposite value
  const toggle = useCallback((): void => setState((state) => !state), []);

  return [state, toggle];
};
```
