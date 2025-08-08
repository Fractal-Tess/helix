<script lang="ts">
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>Terms of Service - Mono V2</title>
  <meta name="description" content="Terms of Service for Mono V2 platform" />
</svelte:head>

<div class="rounded-lg shadow-sm border p-8">
  <div class="mb-8">
    <Badge variant="outline" class="mb-4"
      >{m['legal.last_updated']({ date: 'January 15, 2024' })}</Badge
    >
    <h1 class="text-3xl font-bold mb-4">
      {m['legal.terms.title']()}
    </h1>
    <p class="text-muted-foreground">{m['legal.terms.description']()}</p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mt-8 mb-4">
      1. {m['legal.terms.sections.acceptance']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.acceptance_text']()}
    </p>
    <p class="mb-6">
      {m['legal.terms.acceptance_text2']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      2. {m['legal.terms.sections.use_services']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.use_services_text']()}
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li>{m['legal.terms.use_services_rules.age']()}</li>
      <li>{m['legal.terms.use_services_rules.security']()}</li>
      <li>{m['legal.terms.use_services_rules.lawful']()}</li>
      <li>{m['legal.terms.use_services_rules.interfere']()}</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      3. {m['legal.terms.sections.intellectual_property']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.intellectual_property_text']()}
    </p>
    <p class="mb-6">
      {m['legal.terms.intellectual_property_text2']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      4. {m['legal.terms.sections.limitation_liability']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.limitation_liability_text']()}
    </p>
    <p class="mb-6">
      {m['legal.terms.limitation_liability_text2']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      5. {m['legal.terms.sections.termination']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.termination_text']()}
    </p>
    <p class="mb-6">
      {m['legal.terms.termination_text2']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      6. {m['legal.terms.sections.governing_law']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.governing_law_text']()}
    </p>
    <p class="mb-6">
      {m['legal.terms.arbitration_text']()}
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      7. {m['legal.terms.sections.contact_information']()}
    </h2>
    <p class="mb-4">
      {m['legal.terms.contact_questions']()}
    </p>
    <div class="bg-muted p-4 rounded-lg mb-6">
      <p>
        <strong>{m['legal.terms.contact.email']()}</strong>
        {m['legal.terms.contact.email_value']()}
      </p>
      <p>
        <strong>{m['legal.terms.contact.address']()}</strong>
        {m['legal.terms.contact.address_value']()}
      </p>
    </div>
  </div>
</div>
