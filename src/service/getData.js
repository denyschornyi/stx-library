export const getData = async (query, searchBy = "intitle", startIndex = 0) => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}+${searchBy}&maxResults=10&startIndex=${startIndex}`
  );
  if (!res.ok) {
    throw new Error(`Could not fetch , recived ${res.status}`);
  }
  return await res.json();
};
