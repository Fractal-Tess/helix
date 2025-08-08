<script lang="ts">
  import { Button } from '@repo/ui/components/ui/button/index.js';
  import { Input } from '@repo/ui/components/ui/input/index.js';
  import { Label } from '@repo/ui/components/ui/label/index.js';
  import * as m from '$lib/paraglide/messages.js';

  const id = $props.id();
</script>

<div class="flex flex-col gap-6">
  <div class="grid gap-3">
    <Label for="email-{id}">{m['sign_in.email']()}</Label>
    <Input
      id="email-{id}"
      type="email"
      placeholder={m['sign_in.email_placeholder']()}
      required
    />
  </div>
  <Button type="submit" class="w-full">{m['sign_in.login']()}</Button>
</div>
