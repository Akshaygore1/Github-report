import { FaGithub } from "react-icons/fa"
const footerYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral-content text-black footer-center">
      <div>
        <FaGithub className="text-5xl p-1" />
        <p> Copyright &copy {footerYear} All copyright Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
