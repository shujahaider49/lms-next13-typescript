import Banner from "@/components/banner"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const ChapterId = () => {

  return (
    <div>
        <Banner 
        variant="warning"
        label="You need to purchase this course to watch this chapter"
        />
        <div className="flex flex-col max-w-4xl mx-auto pb-20">
          <div className="p-4">
            <div className="relative aspect-video">
              <video  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" controls muted></video>
            </div>
          </div>
          <div className="p-4 flex flex-col md:flex-row items-center justify-between">
              <h2 className="text-2xl font-semibold mb-2">
                Introduction
              </h2>
              <Button 
              className="w-full md:w-auto"
              >
                Enroll for $78.03
              </Button>
          </div>
          <Separator />
          <div>
            <h1 className="flex gap-x-1 pt-3">
              This is my <p className="font-bold"> introduction </p> description
            </h1>
          </div>
        </div>
    </div>
  )
}

export default ChapterId
