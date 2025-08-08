<script lang="ts">
  import { SignIn } from 'svelte-clerk/client';
</script>

<SignIn afterSignInUrl={'/dashboard'} withSignUp />
