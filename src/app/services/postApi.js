export const getBlogPost = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await data.json();
  return res;
};
