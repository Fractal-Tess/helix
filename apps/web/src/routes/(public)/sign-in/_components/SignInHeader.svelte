<script lang="ts">
  import GalleryVerticalEndIcon from '@lucide/svelte/icons/gallery-vertical-end';
  import * as m from '$lib/paraglide/messages.js';
</script>

<div class="flex flex-col items-center gap-2">
  <a href="##" class="flex flex-col items-center gap-2 font-medium">
    <div class="flex size-8 items-center justify-center rounded-md">
      <GalleryVerticalEndIcon class="size-6" />
    </div>
    <span class="sr-only">{m['sign_in.company_name']()}</span>
  </a>
  <h1 class="text-xl font-bold">
    {m['sign_in.welcome_to']({ company: m['sign_in.company_name']() })}
  </h1>
  <div class="text-center text-sm">
    {m['sign_in.dont_have_account']()}
    <a href="##" class="underline underline-offset-4">
      {m['sign_in.sign_up']()}
    </a>
  </div>
</div>
