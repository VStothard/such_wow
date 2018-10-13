<template>
    <section class="flex" :class="{ 'flex-row-reverse' : imageRight }">
       <div class="border w-2/5" :class="{ 'pl-4' : imageRight, 'pr-4' : !imageRight }">
        <img src="~/assets/img/woman.jpg" alt="image alt tag" />
       </div>
       <div class="border w-3/5">
        <p>Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
        <p>"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</p> 
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id est diam. Duis placerat, nisl et rhoncus interdum, felis nulla varius dolor, id scelerisque felis arcu vel enim. Morbi vitae enim aliquam, sollicitudin diam ut, pulvinar enim. Sed iaculis sollicitudin elit, nec cursus elit pharetra ac. Fusce neque nisl, egestas vel enim non, malesuada vehicula est. Integer dictum nulla a viverra fringilla. Vestibulum dignissim mollis lorem vitae dignissim. Nullam viverra lectus augue, sed tincidunt metus malesuada quis. Nam pretium erat nisi, quis egestas nunc tincidunt et. Fusce gravida erat ut leo sodales, efficitur egestas arcu accumsan. Donec luctus laoreet ante ut vulputate. Nam sed malesuada lectus.</p>
       </div>
    </section>
</template>

<script>
    export default {
        props: {
            imageRight: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
