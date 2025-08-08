<script lang="ts">
  import InnerShadowTopIcon from '@tabler/icons-svelte/icons/inner-shadow-top';
  import { useClerkContext } from 'svelte-clerk/client';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import type { ComponentProps } from 'svelte';
  import * as m from '$lib/paraglide/messages.js';
  import AddXpButton from './AddXpButton.svelte';
  import NavDocuments from './NavDocuments.svelte';
  import NavMain from './NavMain.svelte';
  import NavSecondary from './NavSecondary.svelte';
  import NavUser from './NavUser.svelte';
  import { sidebarData } from './sidebar-data.js';

  let { ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();
  const clerk = useClerkContext();
</script>

<Sidebar.Root collapsible="offcanvas" {...restProps}>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton class="data-[slot=sidebar-menu-button]:!p-1.5">
          {#snippet child({ props })}
            <a href="/dashboard" {...props}>
              <InnerShadowTopIcon class="!size-5" />
              <span class="text-base font-semibold"
                >{m['dashboard.company_name']()}</span
              >
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMain items={sidebarData.navMain} />
    <NavDocuments items={sidebarData.documents} />
    <NavSecondary items={sidebarData.navSecondary} class="mt-auto" />
    <div class="px-4 py-2">
      <AddXpButton amount={250} />
    </div>
  </Sidebar.Content>
  <Sidebar.Footer>
    <NavUser
      username={clerk.user?.username ?? ''}
      email={clerk.user?.emailAddresses[0].emailAddress ?? ''}
      avatar={clerk.user?.imageUrl ?? '/images/avatar.png'}
    />
  </Sidebar.Footer>
</Sidebar.Root>
