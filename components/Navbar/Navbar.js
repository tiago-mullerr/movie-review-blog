import Summary from "../Summary/Summary";


const Navbar = () => {
    return (
        <div className="header">
            <div className="nav-bar-links">
                <a href='/blog'><span>Blog</span></a>
            </div>
            <Summary></Summary>
        </div>
    );
}

export default Navbar;