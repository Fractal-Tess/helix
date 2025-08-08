<script lang="ts">
  import { Badge } from '@repo/ui/components/ui/badge/index.js';
  import * as m from '$lib/paraglide/messages.js';
</script>

<svelte:head>
  <title>Privacy Policy - Mono V2</title>
  <meta name="description" content="Privacy Policy for Mono V2 platform" />
</svelte:head>

<div class="rounded-lg shadow-sm border p-8">
  <div class="mb-8">
    <Badge variant="outline" class="mb-4"
      >{m['legal.last_updated']({ date: 'January 15, 2024' })}</Badge
    >
    <h1 class="text-3xl font-bold mb-4">
      {m['legal.privacy.title']()}
    </h1>
    <p class="text-muted-foreground">{m['legal.privacy.description']()}</p>
  </div>

  <div class="prose max-w-none">
    <h2 class="text-2xl font-semibold mt-8 mb-4">
      1. {m['legal.privacy.sections.information_collect']()}
    </h2>
    <p class="mb-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
    <p class="mb-6">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      2. {m['legal.privacy.sections.how_use']()}
    </h2>
    <p class="mb-4">
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit
      </li>
      <li>
        Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt
      </li>
      <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      3. {m['legal.privacy.sections.information_sharing']()}
    </h2>
    <p class="mb-4">
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas
      molestias excepturi sint occaecati cupiditate non provident.
    </p>
    <p class="mb-6">
      Similique sunt in culpa qui officia deserunt mollitia animi, id est
      laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
      distinctio.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      4. {m['legal.privacy.sections.data_security']()}
    </h2>
    <p class="mb-4">
      Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
      impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
      assumenda est, omnis dolor repellendus.
    </p>
    <p class="mb-6">
      Temporibus autem quibusdam et aut officiis debitis aut rerum
      necessitatibus saepe eveniet ut et voluptates repudiandae sint et
      molestiae non recusandae.
    </p>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      5. {m['legal.privacy.sections.your_rights']()}
    </h2>
    <p class="mb-4">
      Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
      voluptatibus maiores alias consequatur aut perferendis doloribus
      asperiores repellat.
    </p>
    <ul class="list-disc pl-6 mb-6">
      <li>{m['legal.privacy.rights.access']()}</li>
      <li>{m['legal.privacy.rights.rectification']()}</li>
      <li>{m['legal.privacy.rights.erasure']()}</li>
      <li>{m['legal.privacy.rights.restrict']()}</li>
      <li>{m['legal.privacy.rights.portability']()}</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-4">
      6. {m['legal.privacy.sections.contact_us']()}
    </h2>
    <div class="bg-muted p-4 rounded-lg mb-6">
      <p>
        <strong>{m['legal.privacy.contact.email']()}</strong>
        {m['legal.privacy.contact.email_value']()}
      </p>
      <p>
        <strong>{m['legal.privacy.contact.address']()}</strong>
        {m['legal.privacy.contact.address_value']()}
      </p>
    </div>
  </div>
</div>
