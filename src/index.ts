interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(): Promise<IPost[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result: IPost[] = await response.json();
  return result;
}

function createPostNode(post: IPost): HTMLLIElement {
  const postItem = document.createElement('li');
  postItem.innerHTML = `<p>Title: ${post.title}</p><p>Body: ${post.body}</p><p>Id: ${post.id}</p><p>UserId: ${post.userId}</p>`;
  return postItem;
}

async function main() {
  const posts = await fetchPosts();
  const postList = document.getElementById('postList');
  posts.forEach((post) => {
    postList?.appendChild(createPostNode(post))
  })
}

main();
