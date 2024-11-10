

export default async function About(){
    await new Promise((resolve) => { setTimeout(resolve, 5000)});
    
    return(
    <div>
        <br></br>
        <h1 className="text-green-900 text-3xl text-justify mr-4" > About Page </h1>
            <h1 className="bg-pink-600 
                            border-x-4 
                            font-semibold	
                         text-blue-600 
                         text-3xl
                         p-5	mr-5
                         text-justify
                         "
                         
                         
                         >I am Kanwal Rafique</h1>
            <p className="text">I am an IT teacher I'm also working in an schooMy major subjects are math, Physics and Englishl </p>
        <img src="https://teachermade.com/wp-content/uploads/2023/08/ChatGPT-prompts-for-teachers.png" alt="IT teacher"/>
<br></br>

<button className="bg-teal-900        text-sky-50    rounded   hover:bg-orange-500  " >Click here</button>
        </div>
    )
}