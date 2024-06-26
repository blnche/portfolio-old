import document from '../assets/icons/document.svg'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <a href="https://blanchepeltier.vercel.app" className="btn btn-ghost text-3xl"><h1>{'{Blanche}'}</h1></a>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end flex">
                        <a className="btn btn-success mr-2 flex-row lg:hidden" href="https://drive.google.com/file/d/198mdVi6PewPE_VC4ELuOAPQCZUI266F1/view?usp=drive_link">
                        CV
                        <img src={document} alt="Document"/>
                        </a>
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="#academics">Formations</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal items-center text-lg">
                        <li><a href="#academics">Formation</a></li>
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <a href="https://drive.google.com/file/d/198mdVi6PewPE_VC4ELuOAPQCZUI266F1/view?usp=drive_link" target='_blank' className="btn btn-success flex-row text-lg font-normal">
                        CV
                        <img src={document} alt="Document"/>
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar