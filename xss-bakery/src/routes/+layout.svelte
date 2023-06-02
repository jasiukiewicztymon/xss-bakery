<script>
    import { onMount } from 'svelte';
    import { initFirebase } from '$lib/client/firebase';
    import { auth as authStore } from '../stores/auth'
    
    onMount(() => {
        const { auth } = initFirebase();
        onAuthStateChanged(auth, authStore.set);
    }) 
</script>