<script lang="ts">
  import { MoonIcon, SunIcon } from 'lucide-svelte';
  import { toggleMode } from 'mode-watcher';
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import * as Sidebar from '@repo/ui/components/ui/sidebar/index.js';
  import { useProfile } from '$lib/stores/useProfile';
  import CircularProgressAvatar from './CircularProgressAvatar.svelte';

  type Props = {
    username: string;
    email: string;
    avatar: string;
  };
  let { email, username, avatar }: Props = $props();

  const profile = useProfile();
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <Sidebar.MenuButton
      size="lg"
      class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <div class="grid flex-1 text-left text-sm leading-tight">
        <span class="truncate font-medium">{username || 'User'}</span>
        <span class="text-muted-foreground truncate text-xs">
          {email || 'No email'}
        </span>
        {#if profile.profile?.data?.level}
          <span class="text-xs">Lv {profile.profile?.data?.level}</span>
        {/if}
      </div>
      <Button onclick={toggleMode} variant="outline" size="icon">
        <SunIcon
          class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0"
        />
        <MoonIcon
          class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 !transition-all dark:rotate-0 dark:scale-100"
        />
        <span class="sr-only">Toggle theme</span>
      </Button>

      <div class="ml-2">
        <CircularProgressAvatar
          src={avatar}
          size={40}
          stroke={3}
          progress={profile.profile?.data?.progress ?? 0}
        />
      </div>
    </Sidebar.MenuButton>
  </Sidebar.MenuItem>
</Sidebar.Menu>
