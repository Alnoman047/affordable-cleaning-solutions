import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import blogCover from "../../assets/2.png"
import Cover from "../Shared/Cover/Cover";
import blogImg from "../../assets/10.png"


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <Cover img={blogImg} title="Blogs"></Cover>
            <section className="bg-transparent text-gray-100 mt-44">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline bg-[#BFDBF7] focus:no-underline rounded-lg lg:grid lg:grid-cols-12 ">
			<img src={blogCover} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2  mt-20 lg:col-span-5">
				<h3 className="text-2xl font-semibold text-[#022B3A] sm:text-4xl ">Spotless Savings: Cleaning Tips & Tricks Blog</h3>
				
				<p className="font-light text-[#022B3A]">Discover budget-friendly cleaning tips and tricks on our blog. Keep your space spotless without overspending with DIY solutions and efficient techniques.</p>
			</div>
		</a>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {
               blogs.map(blog => <Blog key={blog.blog_id} blog={blog}></Blog>) 
            }

        </div>

		
	</div>
</section>
        
        </div>
    );
};

export default Blogs;