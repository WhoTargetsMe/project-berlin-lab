<script>
  export let data;
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";

  const keys = Object.values(data);

  onMount(() => {
    if (keys.includes(null)) {
      setTimeout(() => {
        window.location.href = "https://www.prolific.co"
      }, 3000);
    } else {
      goto('/');
    }
  })
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">Complete the onboarding process in prolific to continue. Redirecting in few seconds</div>
</div>