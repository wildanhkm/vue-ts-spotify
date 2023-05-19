<template>
  <input type="text" placeholder="Search" :value="modelValue" @input="updateValue" />
</template>
<script setup lang="ts">
defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>
