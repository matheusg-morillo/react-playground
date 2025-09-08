import React, { startTransition } from "react";

export default function Item({ action }: { action: (...args: string[]) => Promise<void> }) {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // To expose an action prop, await the callback in startTransition.
    startTransition(async () => {
      await action(event.target.value);
    })
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input
        type="number"
        onChange={handleChange}
        defaultValue={1}
        min={1}
      />
    </div>
  )
}
