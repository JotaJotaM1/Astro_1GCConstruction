// src/components/PostsList.jsx
export default function PostsList({ posts }) {
    return (
        <div className="posts-grid">
            {posts.map((post) => (
                <article key={post.slug} className="post-card">
                    <h2>
                        <a
                            href={`/recursos/${post.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {post.data.title}
                        </a>
                    </h2>
                    <p><time>{new Date(post.data.date).toLocaleDateString()}</time></p>
                    <p>{post.data.description}</p>
                    <div className="tags">
                        {post.data.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                </article>
            ))}
        </div>
    );
}