import { cookies } from 'next/headers'; // Import cookies
export const  GET = async() => {
  const res = await fetch('http://localhost:8080/v2/api/films/',{
    next: { revalidate: 3 },
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'process.env.DATA_API_KEY',
    },
  })
 
  return res.json() 
}
