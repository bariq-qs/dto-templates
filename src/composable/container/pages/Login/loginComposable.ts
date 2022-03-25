import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const email = ref()
    const password = ref()
    const loading = ref(false)
    const router = useRouter()
    const submitData = () => {
      console.log('star')
      const isAuth = true as any
      localStorage.setItem('isAuth', isAuth)
      console.log('kode')
      router.push({ name: 'Dashboard' })
    }
    return {
      email,
      password,
      loading,
      submitData
    }
  }
}