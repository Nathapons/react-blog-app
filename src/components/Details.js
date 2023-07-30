import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import blogs from "../data/blog"
import './Detail.css'

export default function Details() {
    const { id } = useParams()
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const result = blogs.find((item) => item.id === parseInt(id))
        setBlog(result);
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <h2 className="title">บทความ : {blog.title}</h2>
            <img src={blog.image_url} alt={blog.title} className="blog-img" />
            <div className="blog-detail">
                <strong>ผู้เขียน : {blog.author}</strong>
                <p>{blog.content}</p>
            </div>
        </div>
    )
}