import "./footer.css"

function Footer() {
  return (
    <footer className="footer flex">
      <ul className="flex">
        <li><a href="">About</a></li>
        <li><a href="">Projects</a></li> 
        <li><a href="">Speaking</a></li> 
        <li><a href="">Uses</a></li> 
      </ul>
      <p className="subtitle">© 2021 - {new Date().getFullYear()} | Built with reactjs and CSS by {'YoussefElaalem'}</p>
    </footer>
  )
}

export default Footer