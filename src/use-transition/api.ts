export async function updateQuantity(newQuantity) {
  return new Promise((resolve, reject) => {
    console.log("API: Updating quantity to", newQuantity);
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

