"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, LogIn } from "lucide-react";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";

import { Button } from "~/components/ui/button";
import { HoverBorderGradient } from "~/components/ui/hover-border-gradient-client";
import PlasmaV2 from "~/components/PlasmaV2Client";
import SplitText from "~/components/SplitTextClient";

export default function Page() {
  const user = useAuth();

  console.log(user);
  return (
    <div className="relative min-h-screen">
      {/* PlasmaV2 Background */}
      <div className="fixed inset-0 -z-10">
        <PlasmaV2
          speed1={0.3}
          speed2={0.2}
          bend1={1.2}
          bend2={0.8}
          focalLength={0.9}
          fadeInDuration={3000}
          pauseWhenOffscreen={true}
          autoPauseOnScroll={true}
          resumeOnScrollUp={true}
          rotationDeg={45}
          xOffset={-500}
          yOffset={300}
        />
      </div>

      {/* Header */}
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            alt="Helix Logo"
            className="h-8 w-8 rounded-lg"
            height={32}
            src="/assets/logo/logo-32.webp"
            width={32}
          />
          <span className="text-foreground text-xl font-semibold">Helix</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-4">
          <Button asChild variant={"outline"} size="sm">
            <Link
              href="https://github.com/fractal-tess/helix"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </Button>

          <SignedOut>
            <Button asChild variant={"default"} size="sm">
              <Link href="/sign-in">
                <LogIn className="h-4 w-4" />
                Sign In
              </Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "h-8 w-8",
                },
              }}
            />
          </SignedIn>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          {/* New Feature Tag */}
          <Button
            className="mb-8 rounded-full px-4 py-2 text-sm font-medium"
            size="sm"
            variant="secondary"
          >
            <span className="text-primary">⚡</span>
            Learning Platform
          </Button>

          {/* Main Heading */}
          <h1 className="text-foreground mb-6 text-5xl leading-tight font-bold md:text-7xl">
            <SplitText
              className="block"
              delay={100}
              duration={0.6}
              ease="power1.out"
              from={{ opacity: 0, y: 50 }}
              rootMargin="-100px"
              splitType="chars"
              text="Coding &"
              textAlign="center"
              to={{ opacity: 1, y: 0 }}
            />
            <SplitText
              className="block"
              delay={200}
              duration={0.6}
              ease="power1.out"
              from={{ opacity: 0, y: 50 }}
              rootMargin="-100px"
              splitType="chars"
              text="Development"
              textAlign="center"
              to={{ opacity: 1, y: 0 }}
            />
          </h1>

          {/* Description */}
          <SplitText
            className="text-muted-foreground mx-auto mb-8 !block max-w-2xl text-xl"
            delay={10}
            duration={0.5}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            rootMargin="-100px"
            splitType="chars"
            text="Master programming languages through hands-on practice and interactive lessons. Learn to build applications with modern development practices."
            textAlign="center"
            threshold={0.1}
            to={{ opacity: 1, y: 0 }}
          />

          {/* Call to Action Button */}
          <SignedOut>
            <HoverBorderGradient
              containerClassName="rounded-full mx-auto"
              className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              <Link href="/sign-in">Get Started</Link>
            </HoverBorderGradient>
          </SignedOut>

          <SignedIn>
            <HoverBorderGradient
              containerClassName="rounded-full mx-auto"
              className="flex items-center space-x-2 bg-white text-black dark:bg-black dark:text-white"
            >
              <Link href="/learn">Continue Learning</Link>
            </HoverBorderGradient>
          </SignedIn>
        </div>
      </main>
    </div>
  );
}

export default function Home() {
  return <Hero />;
}
