import blog from '../data/blog';
import './Blogs.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

export default function Blogs() {
    const [search, setSearch] = useState("")
    const [filterBlog, setFilterBlog] = useState([])

    useEffect(() => {
        const result = blog.filter((item) => item.title.includes(search))
        setFilterBlog(result)
    }, [search])

    return (
        <div className='blog-container'>
            <div className='search-container'>
                <input type="text" className='search-input' placeholder='ค้นหาบทความ' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <article>
                {filterBlog.map((item) => (
                    <Link to={`/blog/${item.id}`} key={item.id}>
                        <div className='card'>
                            <h2>{item.title}</h2>
                            <h4>ชื่อผู้แต่ง: {item.author}</h4>
                            <p>{item.content.substring(0, 300)}</p>
                            <hr />
                        </div>
                    </Link>
                ))}
            </article>
        </div>
    )
}