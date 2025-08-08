<script lang="ts">
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { useProfile } from '$lib/stores/useProfile';

  let { amount = 250 }: { amount?: number } = $props();
  const { addXp } = useProfile();

  async function handleClick() {
    try {
      await addXp(amount);
    } catch (e) {
      console.error('Failed to add XP', e);
    }
  }
</script>

<Button size="sm" variant="outline" class="w-full" onclick={handleClick}>
  +{amount} XP
</Button>
