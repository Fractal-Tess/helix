<script lang="ts">
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>Cookie Policy - Mono V2</title>
  <meta name="description" content="Cookie Policy for Mono V2 platform" />
</svelte:head>

<div class="rounded-lg shadow-sm border p-8">
  <div class="mb-8">
    <Badge variant="outline" class="mb-4"
      >{m['legal.last_updated']({ date: 'January 15, 2024' })}</Badge
    >
    <h1 class="text-3xl font-bold mb-4">
      {m['legal.cookies.title']()}
    </h1>
    <p class="text-muted-foreground">{m['legal.cookies.description']()}</p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mt-8 mb-4">
      1. {m['legal.cookies.sections.what_cookies']()}
    </h2>
    <p class="mb-4">
      {m['legal.cookies.what_cookies_description']()}
    </p>
    <p class="mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      2. {m['legal.cookies.sections.how_use']()}
    </h2>
    <p class="mb-4">
      {m['legal.cookies.how_use_description']()}
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li>{m['legal.cookies.how_use_list.personalized']()}</li>
      <li>{m['legal.cookies.how_use_list.analyze']()}</li>
      <li>{m['legal.cookies.how_use_list.remember']()}</li>
      <li>{m['legal.cookies.how_use_list.security']()}</li>
      <li>{m['legal.cookies.how_use_list.advertising']()}</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      3. {m['legal.cookies.sections.types_cookies']()}
    </h2>

    <div class="space-y-6">
      <div class="bg-muted p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">
          {m['legal.cookies.types.essential']()}
        </h3>
        <p class="mb-2">
          {m['legal.cookies.essential_description']()}
        </p>
        <p class="text-sm text-muted-foreground">
          {m['legal.cookies.essential_examples']()}
        </p>
      </div>

      <div class="bg-muted p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">
          {m['legal.cookies.types.functional']()}
        </h3>
        <p class="mb-2">
          {m['legal.cookies.functional_description']()}
        </p>
        <p class="text-sm text-muted-foreground">
          {m['legal.cookies.functional_examples']()}
        </p>
      </div>

      <div class="bg-muted p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">
          {m['legal.cookies.types.analytics']()}
        </h3>
        <p class="mb-2">
          {m['legal.cookies.analytics_description']()}
        </p>
        <p class="text-sm text-muted-foreground">
          {m['legal.cookies.analytics_examples']()}
        </p>
      </div>

      <div class="bg-muted p-6 rounded-lg">
        <h3 class="text-lg font-semibold mb-2">
          {m['legal.cookies.types.marketing']()}
        </h3>
        <p class="mb-2">
          {m['legal.cookies.marketing_description']()}
        </p>
        <p class="text-sm text-muted-foreground">
          {m['legal.cookies.marketing_examples']()}
        </p>
      </div>
    </div>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      4. {m['legal.cookies.sections.manage_cookies']()}
    </h2>
    <p class="mb-4">
      {m['legal.cookies.manage_description']()}
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li>
        <strong>{m['legal.cookies.manage_list.browser_settings']()}</strong>
      </li>
      <li>
        <strong>{m['legal.cookies.manage_list.cookie_consent']()}</strong>
      </li>
      <li>
        <strong>{m['legal.cookies.manage_list.third_party_optout']()}</strong>
      </li>
    </ul>
    <p class="mb-6">
      {m['legal.cookies.manage_note']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      5. {m['legal.cookies.sections.contact_us']()}
    </h2>
    <p class="mb-4">
      {m['legal.cookies.contact_questions']()}
    </p>
    <div class="bg-muted p-4 rounded-lg mb-6">
      <p>
        <strong>{m['legal.cookies.contact.email']()}</strong>
        {m['legal.cookies.contact.email_value']()}
      </p>
      <p>
        <strong>{m['legal.cookies.contact.address']()}</strong>
        {m['legal.cookies.contact.address_value']()}
      </p>
    </div>
  </div>
</div>
