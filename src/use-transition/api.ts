export async function updateQuantity(newQuantity: number): Promise<number> {
  return new Promise((resolve) => {
    console.log("API: Updating quantity to", newQuantity);
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

