import { Link } from 'react-router-dom'
import { Blog } from 'types'
import { BlogDate, BlogExcerpt, BlogHashTag, BlogImage, BlogItemWrapper } from './Styled'

function BlogItem({ blog }: { blog: Blog }): JSX.Element {
  const blogDate = new Date(blog.date * 1000)

  return (
    <BlogItemWrapper>
      <BlogImage>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/column/${blog.image}`} alt={blog.id.toString()} />
        </Link>
        <BlogDate>
          <span>{`${blogDate.getMonth() + 1}.${blogDate.getDate()}.${blogDate.getFullYear()}`}</span>
          <span>{`${blogDate.getHours()}:${blogDate.getMinutes()}`}</span>
        </BlogDate>
      </BlogImage>
      <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
      <div className="d-flex">
        {blog.hashtag.map((h, index) => (
          <BlogHashTag key={index}>#{h}</BlogHashTag>
        ))}
      </div>
    </BlogItemWrapper>
  )
}

export default BlogItem
