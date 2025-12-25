export async function getAddress(position) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.latitude}&longitude=${position.longitude}`
    );

    const addressObj = await res.json();
    return addressObj;
  } catch (err) {
    console.log(err);
  }
}
