import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <section className="bg-transparent text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline bg-[#BFDBF7] focus:no-underline rounded-lg lg:grid lg:grid-cols-12 ">
			<img src="https://i.ibb.co/gtkLhFz/tierra-mallorca-rg-J1-J8-SDEAY-unsplash.jpgs" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2  mt-20 lg:col-span-5">
				<h3 className="text-2xl font-semibold text-[#022B3A] sm:text-4xl ">Discover the Pinnacle of Luxury Living</h3>
				
				<p className="font-light text-[#022B3A]">Unveiling Extraordinary Estates Globally: Discover Opulent Residences Redefining Luxury Living in Iconic Destinations Worldwide.</p>
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