---
templateKey: post
title: useOnScreen
date: "2018-11-08"
gist: https://gist.github.com/gragland/d1175eb983772b077cb17ae0841c5329
sandbox: https://codesandbox.io/s/y7kr0vll4v
isMultilingual: true
links:
  - url: https://github.com/thebuilder/react-intersection-observer
    name: react-intersection-observer
    description: Uma implementação mais robusta e configurável desse Hook.
---

This hook allows you to easily detect when an element is visible on the
screen as well as specify how much of the element should be visible before being
considered on screen. Perfect for lazy loading images or triggering animations when
the user has scrolled down to a particular section.

Esse hook te permite facilmente detectar quando um elemento é visível na tela e
também especificar o quanto do elemento deve estar visível antes de ser considerado dentro da tela.
Perfeito para Lazy loading de imagens ou ativar animações quando o usuário
desce para uma determinada seção.

```jsx
import { useState, useEffect, useRef } from "react";

// Uso
function App() {
  // Referência para o elemento que nós queremos detectar se está em tela
  const ref = useRef();
  // Chamamos o hook passando a referência e o margin de root
  // Neste caso, ele seria considerado em tela se mais ...
  // ... que 300px do elemento estiver visível.
  const onScreen = useOnScreen(ref, "-300px");

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <h1>Descer para a próxima sessão...</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          backgroundColor: onScreen ? "#23cebd" : "#efefef",
        }}
      >
        {onScreen ? (
          <div>
            <h1>Hey Eu estou na tela</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Descer mais 300px do topo dessa sessão</h1>
        )}
      </div>
    </div>
  );
}

// Hook
function useOnScreen(ref, rootMargin = "0px") {
  // Estado e setter para armazenar se o elemento está visível
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualizar o estado quando o callback do observador dispara
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Array vazio que garante que o efeito é executado apenas na montagem e desmontagem

  return isIntersecting;
}
```

```typescript
import { useState, useEffect, useRef, MutableRefObject } from "react";

// Usage
function App() {
  // Referência para o elemento que nós queremos detectar se está em tela
  const ref: any = useRef<HTMLDivElement>();
  // Chamamos o hook passando a referência e o margin de root
  // Neste caso, ele seria considerado em tela se mais ...
  // ... que 300px do elemento estiver visível.
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-300px");

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <h1>Descer para a próxima sessão...</h1>
      </div>
      <div
        ref={ref}
        style={{
          height: "100vh",
          backgroundColor: onScreen ? "#23cebd" : "#efefef",
        }}
      >
        {onScreen ? (
          <div>
            <h1>Hey Eu estou em tela</h1>
            <img src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif" />
          </div>
        ) : (
          <h1>Desça mais 300 pixels</h1>
        )}
      </div>
    </div>
  );
}

// Hook
function useOnScreen<T extends Element>(
  ref: MutableRefObject<T>,
  rootMargin: string = "0px"
): boolean {
  // Referência para o elemento que nós queremos detectar se está em tela
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Atualizar o estado quando o callback do observador dispara
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Array vazio que garante que o efeito é executado apenas na montagem e desmontagem

  return isIntersecting;
}
```
