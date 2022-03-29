---
title: useTimeAgo
date: "2022-03-29"
isMultilingual: true
---

Recebe uma data e retorna uma string de quanto tempo passou desde então e gerencia sua atualização.

```jsx
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";

export function useTimeAgo(compareDate) {
	const [timeAgo, setTimeAgo] = useState(() => {
		return getTimeAgoFromNow(compareDate);
	});
	
	function getTimeAgoFromNow(date) {
		return formatDistance(date, new Date(), {
			locale: ptBr,
			addSufix: true
		});
	}

	useEffect(() => {
		function refreshTimeAgo() {
			setTimeAgo(getTimeAgoFromNow(compareDate));
		}
		
		window.addEventListener("focus", refreshTimeAgo);
		
		return () => {
			window.removeEventListener("focus", refreshTimeAgo);
		};
	}, [compareDate]);

	return timeAgo;
}
```

```typescript
import { formatDistance } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useEffect, useState } from "react";

export function useTimeAgo(compareDate: Date) {
	const [timeAgo, setTimeAgo] = useState(() => {
		return getTimeAgoFromNow(compareDate);
	});
	
	function getTimeAgoFromNow(date) {
		return formatDistance(date, new Date(), {
			locale: ptBr,
			addSufix: true
		});
	}

	useEffect(() => {
		function refreshTimeAgo() {
			setTimeAgo(getTimeAgoFromNow(compareDate));
		}
		
		window.addEventListener("focus", refreshTimeAgo);
		
		return () => {
			window.removeEventListener("focus", refreshTimeAgo);
		};
	}, [compareDate]);

	return timeAgo;
}
```
