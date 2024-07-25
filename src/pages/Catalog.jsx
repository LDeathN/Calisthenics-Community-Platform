import { useGetAllPosts } from '../hooks/usePosts';
import './Catalog.css';
import CatalogListItem from './CatalogListItem';

function Catalog() {
  const [posts] = useGetAllPosts();

  return (
    <section id='catalog-page'>
      <h1>All Posts</h1>

      {posts.length > 0
        ? posts.map(post => <CatalogListItem key={post._id} {...post} />)
        : <h3 className='no-posts'>No posts yet</h3>
      }

    </section>
  );
}

export default Catalog;