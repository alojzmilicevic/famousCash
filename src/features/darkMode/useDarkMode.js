import { useCallback} from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

export default function useDarkMode() {
  const [darkModeEnabled, setDarkMode] = useLocalStorage('dark-mode-enabled',false);

  const onToggleDarkMode = useCallback(() => {
    setDarkMode(!darkModeEnabled);
  }, [darkModeEnabled, setDarkMode]);

  return { onToggleDarkMode, darkModeEnabled };
}
