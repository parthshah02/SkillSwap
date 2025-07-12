import { cn } from "@/lib/utils"
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

const Spline = dynamic(
  () => import('@splinetool/react-spline'),
  { 
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center h-full w-full">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }
)

export interface SplineSceneProps extends React.HTMLAttributes<HTMLDivElement> {
  scene: string
  className?: string
}

export function SplineScene({ scene, className, ...props }: SplineSceneProps) {
  return (
    <div className={cn("relative w-full h-full min-h-[400px]", className)} {...props}>
      <Spline scene={scene} />
    </div>
  )
}
