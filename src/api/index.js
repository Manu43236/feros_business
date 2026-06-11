const BASE_URL = 'https://console.feros.in/api/v1';

async function post(path, body) {
  const res = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err?.message || 'Server error')
  }
  return res.json()
}

export const demoRequestsApi = {
  submit: (data) => post('/demo-requests', data),
}
