import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {

    return (

        <footer className="border-t border-white/10 py-8 mt-20">

            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Vishal Viswanath. All rights reserved.
                </p>

                <div className="flex gap-5 text-gray-400">

                    <a href="https://github.com/Vishalviswanath">
                        <Github size={18} />
                    </a>

                    <a href="www.linkedin.com/in/vishal12viswanath">
                        <Linkedin size={18} />
                    </a>

                    <a href="mailto:vishal12viswanath@gmail.com">
                        <Mail size={18} />
                    </a>

                </div>

            </div>

        </footer>

    )
}