<template>
<div class="flex items-center items-stretch w-100 input-icon-right-grey w-full">
  <InputText v-if="$enumBase.input.text == type" type="text" class="none-right-radius left-radius w-full" :style="inputBackground?{backgroundColor: inputBackground }:{}" v-model="input" :placeholder="placeholder" />
  <div :class="(canClick) ? 'background-grey-lighten-4 px-2 items-center flex right-radius cursor-pointer' : 'background-grey-lighten-4 px-2 items-center flex right-radius'" @click="onClick()">
    <div v-html="icon" v-if="icon"></div>
    <div class="label" v-else>
      <p>{{ label }}</p>
    </div>
  </div>
</div>
</template>

<script src="@/composables/components/molecules/InputIconRightGrey/inputIconRightComposable.ts" lang="ts"></script>