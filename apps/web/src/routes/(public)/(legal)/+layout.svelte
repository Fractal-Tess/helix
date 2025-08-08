<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { page } from '$app/state';
  import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>Legal - Mono V2</title>
</svelte:head>

<div class="min-h-screen">
  <!-- Header -->
  <header class="border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-6">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold">Mono V2</a>
          <Badge variant="secondary" class="ml-3">Legal</Badge>
        </div>
        <nav class="hidden md:flex space-x-8">
          <a
            href="/privacy"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors {page
              .url.pathname === '/privacy'
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'}"
          >
            {m['legal.nav.privacy_policy']()}
          </a>
          <a
            href="/terms"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors {page
              .url.pathname === '/terms'
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'}"
          >
            {m['legal.nav.terms_of_service']()}
          </a>
          <a
            href="/cookies"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors {page
              .url.pathname === '/cookies'
              ? 'bg-accent text-accent-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'}"
          >
            {m['legal.nav.cookie_policy']()}
          </a>
        </nav>
        <div class="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            <a href="/" class="flex items-center gap-2">
              <ArrowLeft class="h-4 w-4" />
              {m['legal.back_button']()}
            </a>
          </Button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <slot />
  </main>

  <!-- Footer -->
  <footer class="border-t mt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center text-sm text-muted-foreground">
        <p>{m['home.footer.copyright']()}</p>
        <p class="mt-2">
          <a href="/legal/privacy" class="mx-2 hover:text-foreground"
            >{m['legal.nav.privacy_policy']()}</a
          >
          <a href="/legal/terms" class="mx-2 hover:text-foreground"
            >{m['legal.nav.terms_of_service']()}</a
          >
          <a href="/legal/cookies" class="mx-2 hover:text-foreground"
            >{m['legal.nav.cookie_policy']()}</a
          >
        </p>
      </div>
    </div>
  </footer>
</div>
