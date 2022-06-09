## ThemeSwitcher

```jsx
import { ToggleSwitch } from "./ToggleSwitch";

export function ThemeSwitcher() {
  return (
    <ToggleSwitch
      name="themeSwitcher"
      onChecked={() => {
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");
      }}
      onUnchecked={() => {
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
      }}
      isChecked={document.documentElement.classList.contains("dark")}
    />
  );
}

```