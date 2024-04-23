import Cover from "../Shared/Cover/Cover";
import serviceImg from "../../assets/19.jpg"
import img1 from "../../assets/26.jpg"
import img2 from "../../assets/10.png"
import img3 from "../../assets/11.png"
import img4 from "../../assets/12.png"
import img5 from "../../assets/13.png"
import img6 from "../../assets/14.png"
import img7 from "../../assets/15.png"
import img8 from "../../assets/16.png"
import img9 from "../../assets/17.jpg"
import img10 from "../../assets/18.jpg"


const Gallery = () => {
    return (
        <div>
            <Cover img={serviceImg} title="Gallery"></Cover>
            <div>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={img1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img3} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img4} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img5} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img6} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img7} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img8} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={img9} />
		<img src={img10} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
            </div>
        </div>
    );
};

export default Gallery;