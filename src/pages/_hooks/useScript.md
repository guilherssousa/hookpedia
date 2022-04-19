---
templateKey: post
title: useScript
date: "2022-04-18"
isMultilingual: false
tags: []
---

Esse hook faz com que carregar scripts externos dinamicamente e saber quando são carregados seja feio de forma super fácil. É útil quando você precisa interagir com bibliotecas de terceiros (como Stripe, Google Analytics e etc.) e você prefere carregar o script quando é preciso ao invés de declarar no head do documento para cada requisição.

```jsx
import { useState, useEffect } from "react";

// Forma de uso
function App() {
  const status = useScript(
    "https://pm28k14qlj.codesandbox.io/test-external-script.js"
  );
  return (
    <div>
      <div>
        Script status: <b>{status}</b>
      </dv>
      {status === "ready" && (
        <div>
          Script function call response: <b>{TEST_SCRIPT.start()}</b>
        </div>
      )}
    </div>
  );
}
// Hook
function useScript(src) {
  // Observa os status do script ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");
  
  useEffect(
    () => {
      // Permite valores 'falsy' se esperando por outros dados
      // necessários para construir a URL do script passado para esse hook.
      if (!src) {
        setStatus("idle");
        return;
      }

      // Fazendo fetch do elemento do script pela url
      // Pode ter sido adicionado por outra instância desse hook.
      let script = document.querySelector(`script[src="${src}"]`);
      
      if (!script) {
        // Criando script
        script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.setAttribute("data-status", "loading");
        // Adicionar script para o  corpo do documento
        document.body.appendChild(script);

        // Guarda o status no atributo do script
        // Isso pode ser lido por outras instâncias desse hook.
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      } else {
        // Pega status de scripts existentes do atributo e define o estado.
        setStatus(script.getAttribute("data-status"));
      }
      
      // Handler para atualizar status no estado
      // Nota: Mesmo que o script já exista, precisamos adicionar
      // event handlers para atualizar o state dessa instância do hook.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };

      // Adicionando event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);
      
      // Removendo event listeners ao limpar componente
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Rodar novamente apenas quando o src mudar
  );
  return status;
}
```
