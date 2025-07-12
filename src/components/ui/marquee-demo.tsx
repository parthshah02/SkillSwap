import { Marquee } from "./marquee"

const Logos = {
  odoo: () => (
    <svg className="h-10" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 0C44.8 0 0 44.8 0 100C0 155.2 44.8 200 100 200C155.2 200 200 155.2 200 100C200 44.8 155.2 0 100 0ZM100 184.6C54.1 184.6 15.4 146 15.4 100C15.4 54.1 54.1 15.4 100 15.4C145.9 15.4 184.6 54.1 184.6 100C184.6 145.9 145.9 184.6 100 184.6Z" fill="#714B67"/>
      <path d="M123.1 62.3C113.1 52.2 99.2 46 84.2 46C69.2 46 55.3 52.2 45.2 62.3C35.1 72.3 28.9 86.2 28.9 101.2C28.9 116.2 35.1 130.1 45.2 140.2C55.2 150.3 69.1 156.5 84.1 156.5C99.1 156.5 113 150.3 123.1 140.2C133.2 130.2 139.4 116.3 139.4 101.3C139.4 86.3 133.2 72.4 123.1 62.3Z" fill="#714B67"/>
    </svg>
  ),
  tailwind: () => (
    <svg className="h-6" viewBox="0 0 262 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z" fill="#38BDF8"/>
    </svg>
  ),
  nextjs: () => (
    <svg className="h-6" viewBox="0 0 394 79" fill="currentColor">
      <path d="M261.919 0.0330723H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330723Z"/>
    </svg>
  ),
  framer: () => (
    <div className="flex items-center gap-2 font-bold">
      <svg viewBox="0 0 14 21" className="h-6">
        <path d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z" fill="currentColor"/>
      </svg>
      <span>Motion</span>
    </div>
  ),
  aws: () => (
    <svg className="h-8" viewBox="0 0 300 180" fill="#FF9900">
      <path d="M150 0L0 100h60l90-60 90 60h60L150 0zM0 180l90-60 90 60h-60l-90-60-90 60h60z"/>
    </svg>
  )
}

export function MarqueeDemo() {
  return (
    <Marquee pauseOnHover={true}>
      {Object.entries(Logos).map(([key, Logo]) => (
        <div key={key} className="mx-12 flex items-center">
          <Logo />
        </div>
      ))}
    </Marquee>
  )
}
