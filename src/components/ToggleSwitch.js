import "./ToggleSwitch.css";

export function ToggleSwitch({ name, onChecked, onUnchecked, isChecked }) {
  return (
    <span>
      <input
        type="checkbox"
        id="toggle"
        name={name}
        onChange={(e) => {
          if (e.target.checked) onChecked();
          else onUnchecked();
        }}
        defaultChecked={isChecked}
      />
      <label for="toggle"></label>
    </span>
  );
}
