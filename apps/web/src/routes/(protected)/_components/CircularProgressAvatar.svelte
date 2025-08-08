<script lang="ts">
  import { cubicOut } from 'svelte/easing';
  import { Tween } from 'svelte/motion';

  type Props = {
    src: string;
    size?: number; // px
    progress: number; // 0..1
    stroke?: number; // ring thickness in px
  };
  let { src, progress, size = 40, stroke = 3 }: Props = $props();

  const tween = new Tween(0, { duration: 600, easing: cubicOut });

  $effect(() => {
    tween.target = Math.max(0, Math.min(1, progress));
  });

  let radius = $derived((size - stroke) / 2);
  let circumference = $derived(2 * Math.PI * radius);
  let dash = $derived(`${circumference} ${circumference}`);
  let offset = $derived(
    circumference * (1 - Math.max(0, Math.min(1, tween.current)))
  );
</script>

<div
  class="relative inline-block"
  style:width={`${size}px`}
  style:height={`${size}px`}
>
  <img
    {src}
    alt="avatar"
    width={size}
    height={size}
    class="rounded-full object-cover"
    loading="lazy"
    decoding="async"
  />
  <svg
    class="absolute inset-0 z-10"
    width={size}
    height={size}
    viewBox={`0 0 ${size} ${size}`}
    aria-hidden="true"
  >
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      fill="none"
      stroke="var(--muted)"
      stroke-width={stroke}
    />
    <circle
      cx={size / 2}
      cy={size / 2}
      r={radius}
      fill="none"
      stroke="var(--primary)"
      stroke-width={stroke}
      stroke-linecap="round"
      stroke-dasharray={dash}
      stroke-dashoffset={offset}
      transform={`rotate(-90 ${size / 2} ${size / 2})`}
    />
  </svg>
</div>
