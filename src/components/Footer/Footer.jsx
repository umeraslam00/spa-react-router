import { Link } from "react-router-dom"

/**
 * Footer component for the app
 * 
 * Contains logo, links to resources, follow us, and legal pages
 * 
 * @returns {JSX.Element} Footer component
 */
const Footer = () => {
    return (
        <div className="flex justify-between my-[3%]  mx-[5%]">
            {/* Footer - left side */}
            <div className="flex ">
            <Link to="/">
                <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" className="h-14" />
            </Link>
            </div>

            {/* Footer - right side */}
            <div className="flex w-[40%] justify-between">
                <div className="flex flex-col">
                    <h3 className="font-bold">Resources</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-bold">Follow Us</h3>
                    <ul>
                        <li>Github</li>
                        <li>More Link</li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-bold">Legal</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer