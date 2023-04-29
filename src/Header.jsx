import "./header.css"


function Header() {
    return (
        <header>
            <div className="container">
                <div>
                    <a href="./logo">Logo </a>
                    <ul>
                        <li>
                            <a href="#">a1</a>
                            <a href="#">a2</a>
                            <a href="#">a3</a>
                            <a href="#">a4</a>
                            <a href="#">a5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header