import { useCallback, useState } from "react";

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  const onToggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return { onToggleDarkMode, darkMode };
}
