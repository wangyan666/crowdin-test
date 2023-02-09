<template>
  <p>{{ $t('message.你好世界') }}</p>
  <button @click="handleChangeLang">
    click to change lang
  </button>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

  const i18n = useI18n()
  
  const handleChangeLang = () => {
    if(i18n.locale.value === 'ja') {
      i18n.locale.value = 'zh'
    } else {
      i18n.locale.value = 'ja'
    }
  }

</script>
