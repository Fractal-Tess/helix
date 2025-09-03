import { SignIn } from "@clerk/nextjs";
import PixelBlast from "~/components/PixelBlastClient";

export default function SignInPage() {
  return (
    <div className="relative h-screen w-full">
      {/* Background PixelBlast */}
      <div className="absolute inset-0">
        <PixelBlast
          color="hsl(var(--primary))"
          speed={0.4}
          variant="triangle"
          pixelSize={4}
          patternScale={2}
          patternDensity={0.8}
          enableRipples={false}
          transparent={true}
          edgeFade={0.4}
        />
      </div>

      {/* Centered Sign-in Form */}
      <div className="relative z-10 flex h-full items-center justify-center p-6">
        <div className="w-full max-w-md">
          <SignIn
            forceRedirectUrl={"/dashboard"}
            appearance={{
              layout: {
                logoImageUrl: "/assets/logo/logo-64.webp",
                logoPlacement: "inside",
                showOptionalFields: true,
                shimmer: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
