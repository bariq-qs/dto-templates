import { onMounted, ref, computed } from 'vue'
import {
  provinceUseCase
} from '@/utils/domain/usecase'
import InputIconRightGrey from '@/views/components/molecules/InputIconRightGrey/InputIconRightGrey.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Dashboard',
  components: {
    InputIconRightGrey
  },
  setup() {
    const router = useRouter()
    const data = ref([])
    const inputSearch = ref('')
    const dataFilter = computed(() => data.value.filter((item: any) => item.name.toLowerCase().includes(inputSearch.value.toLowerCase())))
    const getData = () => {
      provinceUseCase.getAll().then((result) => {
        data.value = result.result
      }).catch((err) => {
        console.log(err.error)
      })
    }
    const logOut = () => {
      const isAuth = false as any
      localStorage.setItem('isAuth', isAuth)
      router.push({
        name: 'Login'
      })
    }
    onMounted(() => {
      getData()
    })
    return {
      data,
      dataFilter,
      inputSearch,
      logOut
    }
  }
}