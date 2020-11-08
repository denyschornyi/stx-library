export const getData = async (query, searchBy = "intitle") => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}+${searchBy}&maxResults=40`
  );
  console.log(searchBy);
  if (!res.ok) {
    throw new Error(`Could not fetch , recived ${res.status}`);
  }
  return await res.json();
};
