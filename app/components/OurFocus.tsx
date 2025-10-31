

const OurFocus = () => {
    const focusItems = [
        { 
            title: 'Continued Learning', 
            description: 'We know that during school breaks, children can experience learning loss. Our holiday program helps maintain a level of academic engagement, preventing regression and allowing learners to continue building on their knowledge.' 
        },
        { 
            title: 'Skill development', 
            description: 'We offer activities that go beyond traditional classroom learning, fostering the development of various skills such as teamwork, creativity, and problem-solving.' 
        },
        { 
            title: 'Social interaction', 
            description: 'Because holidays can be isolating for some children, participation in our programs allows them to socialize, make friends, and build positive relationships outside the school environment.' 
        },
        { 
            title: 'Physical activity', 
            description: 'In our programs, sports and physical activities are central, promoting a healthy and active lifestyle among children.' 
        },
    ]
  return (
    <section className='max-w-5xl mx-auto' id='focus'>
      <div className="grid grid-cols-1 gap-16">
        <div>
            <h1 className="lg:text-7xl md:text-5xl text-3xl text-red-800 text-center mb-8">Our Focus</h1>
            {focusItems.map((item, index) =>(
                <div className="mb-3 space-y-2 max-lg:px-4" key={index}>
                    <h2 className="md:text-2xl text-lg text-red-800">{item.title}</h2>
                    <p className="md:text-2xl text-lg font-light">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default OurFocus
