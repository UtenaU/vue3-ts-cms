<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <Fold v-if="!isFold"></Fold>
      <Expand v-else></Expand>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import { fold, Expand } from '@element-plus/icons'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
