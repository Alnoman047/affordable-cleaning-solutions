


const Blog = ({blog}) => {
    const { blog_title, blog_img, blog_description, blog_date} = blog;
    return (
		<>
		
        <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline rounded-lg focus:no-underline bg-[#BFDBF7]">
				<img role="presentation" className="object-cover rounded-t-lg w-full  h-44 bg-gray-500" src={blog_img} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl text-[#022B3A] font-semibold group-hover:underline  group-focus:underline">{blog_title}</h3>
					<span className="text-xs text-[#022B3A] ">{blog_date}</span>
					<p className="text-[#022B3A]">{blog_description}</p>
				</div>
			</a>
		</>
    );
};

export default Blog;