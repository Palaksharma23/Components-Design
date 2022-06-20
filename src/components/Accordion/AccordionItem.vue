<template>
    <div :class="[toggle ? isActive : '']"  @click="accordionhandler($event)">
        <div :class="[label,'label_box']">{{ Heading }}</div>
        <div :class="content" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import { ref } from "vue";
    export default {
        name: "AccordionItem",
        props: {
            Heading: String,
            label: String,
            content: String,
        },
        setup() {
            const toggle = ref(false);
            const isActive = ref("active");

            function accordionhandler(e) {
                toggle.value = !toggle.value;
                e.preventDefault()
                let content = e.target.nextElementSibling;
                if (!toggle.value) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }

            }

            return {
                toggle,
                accordionhandler,
                isActive,
            };
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .label_secondary {
        font-size: 2vw;
        background-color: #2e382b;
        padding: 1%;
        color: white;
        border: 1px solid #475447;
    }

    .content_secondary {
        background-color: white;
    }

    .content_secondary_dark {
        background-color: #475447;
        color: #f7f5f7;
    }

    .label_secondary::before {
        content: "+";
        float: right;
        color: white;
        font-weight: 900;
        padding-right: 1%;
    }

    .active .label_secondary::before {
        content: "-";
        float: right;
        color: white;
        font-weight: 900;
        padding-right: 1%;
    }

    .active .content_secondary {
        background-color: #f7f5f7;
    }

    .active .content_secondary_dark {
        background-color: #475447;
        color: #f7f5f7;
    }

    .label_primary {
        font-size: 2vw;
        background-color: #ffffff;
        padding: 1%;
        color: #000000;
        border-bottom: 1px solid #475447;
    }

    .label_primary_dark {
        font-size: 2vw;
        padding: 1%;
        background-color: #2e382b;
        color: #f7f5f7;
        border-bottom: 1px solid #475447;
    }

    .content_primary {
        background-color: white;
    }

    .content_primary_dark {
        background-color: #2e382b;
        color: #f7f5f7;
    }

    .label_primary::before {
        content: "+";
        float: left;
        color: #000000;
        font-weight: 900;
        border-radius: 50%;
        margin-right: 2%;
        width: 10px;
    }

    .label_primary_dark::before {
        content: "+";
        float: left;
        color: #f7f5f7;
        font-weight: 900;
        border-radius: 50%;
        margin-right: 2%;
        width: 10px;
    }

    .active .label_primary::before {
        content: "-";
        float: left;
        color: #000000;
        font-weight: 900;
        border-radius: 50%;
        margin-right: 2%;
        width: 10px;
    }

    .active .label_primary_dark::before {
        content: "-";
        float: left;
        color: #f7f5f7;
        font-weight: 900;
        border-radius: 50%;
        margin-right: 2%;
        width: 10px;
    }

    .active .content_primary {
        background-color: #f7f5f7;
    }

    .active .content_primary_dark {
        background-color: #2e382b;
        color: #f7f5f7;
    }

    .content {
        padding: 0 18px;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease-out;
        font-size: 1.4vw
    }

    .label_box{
        cursor:pointer
    }
</style>
