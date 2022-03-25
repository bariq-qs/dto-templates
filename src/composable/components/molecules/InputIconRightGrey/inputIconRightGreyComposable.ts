/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref, toRefs, watch } from 'vue'

export default {
  props: ['icon', 'label', 'modelValue', 'type', 'placeholder', 'canClick', 'inputBackground'],
  emits: ['update:modelValue', 'submitInput'],
  setup(props: any, { emit } : any) {
    const icon = ref(props.icon)
    const label = ref(props.label)
    const { modelValue, canClick } = toRefs(props)
    const input = ref((modelValue) ? modelValue.value : '')
    const type = ref(props.type)
    const placeholder = ref(props.placeholder)
    const inputBackground = ref(props.inputBackground)

    watch(input, (newValue) => {
      emit('update:modelValue', newValue)
    })

    const onClick = () => {
      if (canClick) {
        emit('submitInput')
      }
    }
    const reset = () => {
      input.value = ''
    }

    return {
      icon,
      label,
      input,
      type,
      placeholder,
      canClick,
      onClick,
      reset,
      inputBackground
    }
  }
}