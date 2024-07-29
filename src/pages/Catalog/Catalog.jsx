import { useGetAllPosts } from '../../hooks/usePosts';
import './Catalog.css';
import CatalogListItem from './CatalogListItem';

function Catalog() {
  const [posts] = useGetAllPosts();

  return (
    <section id='catalog-page'>
      <h1>All Posts</h1>

      <div className="allPosts-catalog">
        {posts.length > 0
          ? posts.map(post => <CatalogListItem key={post._id} {...post} />)
          : <h3 className='no-posts-catalog'>No posts yet</h3>
        }
      </div>

    </section>
  );
}

export default Catalog;