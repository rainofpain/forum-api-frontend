interface HeaderProps{
    title: string
}

function Header({title}:HeaderProps){
    return(
        <header>
            <nav>
                <span>{title}</span>
            </nav>
        </header>
    ) 
}

export default Header