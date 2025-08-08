<script lang="ts">
  import * as m from '$lib/paraglide/messages.js';
</script>

<div
  class="text-muted-foreground *:[a]:hover:text-primary *:[a]:underline *:[a]:underline-offset-4 text-balance text-center text-xs"
>
  By clicking continue, you agree to our <a href="/terms"
    >{m['sign_in.terms_of_service']()}</a
  >
  and <a href="/privacy">{m['sign_in.privacy_policy']()}</a>.
</div>
