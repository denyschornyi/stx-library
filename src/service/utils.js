export const exttractData = (item) => {
  let img = "";
  if (item.volumeInfo.imageLinks) {
    img = item.volumeInfo.imageLinks.thumbnail;
  } else {
    img =
      "https://thumbs.dreamstime.com/b/no-thumbnail-image-placeholder-forums-blogs-websites-148010362.jpg";
  }
  return {
    title: item.volumeInfo.title,
    img,
    description: item.volumeInfo.description,
    authors: item.volumeInfo.authors,
    categories: item.volumeInfo.categories,
    language: item.volumeInfo.language,
    link: item.volumeInfo.previewLink
  };
};
