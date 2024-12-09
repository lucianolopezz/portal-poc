export async function fetchClientConfig() {
  const res = await fetch("http://localhost:3000/api/client-config");
  const json = await res.json();
  return json;
}