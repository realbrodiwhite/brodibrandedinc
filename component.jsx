/**
 * v0 by Vercel.
 * @see https://v0.dev/t/LvGwxlOAIv2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-950 text-gray-50">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Brodi Branded Inc.</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-gray-950 text-gray-50">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Win a Free or Discounted Website for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl dark:text-gray-400">
                  Brodi Branded Inc. is offering a chance to win a free or discounted website for your business. Enter
                  your information below and spin the wheel to see what you've won!
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <Card className="w-full max-w-md bg-gray-900 p-6 rounded-2xl">
                  <CardHeader>
                    <CardTitle>Enter to Win</CardTitle>
                    <CardDescription>Fill out the form below to enter the giveaway.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <form className="grid gap-4">
                      <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                      <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                      <Input type="tel" placeholder="Phone" className="max-w-lg flex-1" />
                      <Input type="text" placeholder="Business Name" className="max-w-lg flex-1" />
                    </form>
                    <div className="flex justify-center">
                      <Button>Spin to Win</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Services Offered by Brodi Branded Inc.
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Brodi Branded Inc. provides a wide range of technology services to help businesses succeed in the
                digital age.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">DevOps</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your development and deployment processes with our DevOps expertise.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Website Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Create a stunning, responsive website for your business with our web development services.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Custom Business Tools</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate your workflows and streamline your operations with our custom business tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Robotics</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leverage the power of robotics to improve efficiency and productivity in your business.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Workplace Automation</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate repetitive tasks and streamline your workflows with our workplace automation solutions.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">AI</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Harness the power of artificial intelligence to drive innovation and growth in your business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 text-gray-50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Choose Brodi Branded Inc.?</h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Brodi Branded Inc. is a trusted provider of technology solutions, with a proven track record of
                delivering exceptional results for our clients.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Expertise</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  Our team of experts has years of experience in the technology industry, ensuring that we deliver
                  high-quality solutions tailored to your business needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Innovation</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  We stay at the forefront of the latest technology trends, constantly exploring new ways to help our
                  clients stay ahead of the curve.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Reliability</h3>
                <p className="text-sm text-gray-400 dark:text-gray-400">
                  Our clients can count on us to deliver reliable and scalable solutions that meet their evolving needs,
                  ensuring their long-term success.
                </p>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#00b894] px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-[#00b894]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#00b894] border-[#00b894] bg-gray-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-950 text-gray-50">
        <p className="text-xs text-gray-400">&copy; 2024 Brodi Branded Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
