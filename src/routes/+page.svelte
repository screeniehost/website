<script lang="ts">
    import * as Card from "$lib/components/ui/card";
    import { Button } from "$lib/components/ui/button";
    import ToggleTheme from "$lib/components/ui/screenie/ToggleTheme.svelte";
</script>

<div class="flex justify-center items-center min-h-screen text-center shadow-sm p-5">
    <Card.Root class="md:w-1/2 sm:w-full">
        <Card.Header class="flex items-center">
            <img src="/logo.png" alt="logo" class="w-48 p-5">
            <Card.Title class="text-foreground">screenie</Card.Title>
            <Card.Description class="text-muted-foreground">a place to store everything..</Card.Description>
        </Card.Header>
        <Card.Content>
            <p class="text-foreground text-wrap">hi there.. this project is currently on hold due to other projects being prioritized (work stuff). i'm planning to work on this project in the next months, any ideas, help is greatly appreciated. for updates, check our discord or github</p>
            <p class="font-bold text-lg underline underline-offset-8">thanks for understanding, stay tuned.</p>
        </Card.Content>
        <Card.Footer class="flex justify-center gap-3 flex-wrap">
            <Button href="https://github.com/screeniehost" target="_blank">github</Button>
            <Button variant="outline" href="https://discord.gg/tsRDJTARnS" target="_blank">community</Button>
            <ToggleTheme />
        </Card.Footer>
    </Card.Root>  
</div>