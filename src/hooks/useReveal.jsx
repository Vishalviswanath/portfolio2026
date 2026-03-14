import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useReveal(ref) {

  useEffect(() => {

    if (!ref.current) return

    const element = ref.current

    const trigger = ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      onEnter: () => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 80 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
      }
    })

    return () => trigger.kill()

  }, [])
}