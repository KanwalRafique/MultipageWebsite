import Link from "next/link"

export default function Footer (){
    return(

            <ul className="flex gap-20 bg-blue-700">
     <li><Link href="/">Home</Link>
     
     </li>
     <li><Link href="/about">About</Link></li>  
     <li><Link href="/contact-us">Contact us</Link></li>  
     <li><Link href="/job">Job Info</Link></li>  


  </ul>





    )
}
