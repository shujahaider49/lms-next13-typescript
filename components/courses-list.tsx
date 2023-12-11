import Link from "next/link"

const CoursesList = () => {
    const posts = [
        {
            title: "Advance Web Development",
            desc: "Elevate your coding skills with our comprehensive Advanced Web Development courses. Explore cutting-edge technologies and frameworks to create robust and scalable web applications.",
            price: "$78.03",
            img: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            href: "/courses/chapters"
        },
        {
            title: "Graphic Designing",
            desc: "Unleash your creativity with our Graphic Designing courses. Learn the principles of design, master industry-standard tools, and turn your artistic vision into captivating visual content.",
            price: "$22.03",
            img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
            href: "/courses/chapters"
        },
        {
            title: "Search Engine Optimiaztion",
            desc: "Boost your website's visibility and traffic with our SEO courses. Discover strategies to optimize your content, improve rankings on search engines, and enhance your online presence.",
            price: "$53.01",
            img: "https://images.unsplash.com/photo-1600783245777-080fd7ff9253?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHNlb3xlbnwwfHwwfHx8MA%3D%3D",
            href: "/courses/chapters"
        },
        {
            title: "WordPress",
            desc: "Dive into the world of WordPress with our expert-led courses. From basic setups to advanced customization, gain the skills to build and manage dynamic and responsive websites.",
            price: "$22.02",
            img: "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29yZHByZXNzfGVufDB8fDB8fHww",
            href: "/courses/chapters"
        },
        {
            title: "Data Analytics",
            desc: "Analyze data like a pro with our Data Analyst courses. Learn statistical techniques, data visualization, and data-driven decision-making to excel in the field of data analysis.",
            price: "Free",
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMGFuYWx5c3R8ZW58MHx8MHx8fDA%3D",
            href: "/courses/chapters"
        },
        {
            title: "React Js Mastery",
            desc: "Become a React JS expert with our Mastery courses. From fundamental concepts to advanced state management, discover the power of React in building dynamic and efficient user interfaces.",
            price: "$52.09",
            img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3QlMjBqc3xlbnwwfHwwfHx8MA%3D%3D",
            href: "/courses/chapters"
        },
        {
            title: "Shopify Mastery Course",
            desc: "Launch your e-commerce journey with our Shopify Mastery courses. Learn to build, customize, and manage high-converting online stores, and tap into the potential of the Shopify platform.",
            price: "$56.09",
            img: "https://images.unsplash.com/photo-1688561807426-87333ae6e6c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHNob3BpZnl8ZW58MHx8MHx8fDA%3D",
            href: "/courses/chapters"
        },
        {
            title: "Video Editing",
            desc: "Transform your raw footage into cinematic masterpieces with our Video Editing courses. Master the art of storytelling through editing techniques, special effects, and industry-standard editing tools.",
            price: "$25.09",
            img: "https://images.unsplash.com/photo-1618329027137-a520b57c6606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
            href: "/courses/chapters"
        },
    ]
    
    return (
        <div>
        <section className="mt-8 mx-auto px-2 max-w-screen-xl md:px-2">
            
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <Link href={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-full h-48 p-2 rounded-md" />
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2">
                                        {items.title}
                                    </h3>
                                    <p className="text-xs pt-2 pb-2 text-muted-foreground">{items.desc}</p>
                                    <h3 className="text-md md:text-sm font-medium text-slate-700 text-end">
                                        {items.price}
                                    </h3>
                                </div>
                            </Link>
                        </article>
                    ))
                }
            </div>
            {posts.length === 0 && (
                <div>
                    No Courses Found
                </div>
            )}
        </section>
        </div>
    )
}

export default CoursesList
