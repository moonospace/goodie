import { PosthogProvider } from "@shared/components/posthog";
import { Button } from "@shared/components/ui/button";
import globalCss from "@shared/styles/globals.css?url";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Top Indie Hacker, Designer & Developer Resources | Goodie",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalCss,
      },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PosthogProvider>{children}</PosthogProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFoundComponent() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            404.
          </span>
          <h2 className="mt-2 font-medium text-lg">Not found.</h2>

          <p className="mt-6 text-pretty leading-7">
            Sorry, we couldn’t find the page you’re looking for. It might have
            been moved or deleted.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}

function ErrorComponent() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col">
        <div className="flex flex-col">
          <span className="font-mono text-foreground/40 text-sm tracking-tight">
            500.
          </span>
          <h2 className="mt-2 font-medium text-lg">Error found.</h2>

          <p className="mt-6 text-pretty leading-7">
            It seems like something went wrong on our end. Please try again
            later, or contact support if the problem persists.
          </p>
        </div>

        <div className="mt-10 flex">
          <Button asChild variant={"secondary"}>
            <a href="/">
              <i className="fi fi-sr-arrow-alt-circle-left" />
              Bring me back
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
