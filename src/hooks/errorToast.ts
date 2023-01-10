import { POSITION } from 'vue-toastification';
import { useToast } from 'vue-toastification';

export default function toast (status:status, message: string) {
    const toast = useToast()
    switch(status) {
        case "error":
        toast.error(message, {
            position: POSITION.BOTTOM_RIGHT,
            timeout: 2000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
          })
        break
        default:
        return toast.success(message, {
                position: POSITION.BOTTOM_RIGHT,
                timeout: 2000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
            })
    }
}

type status = "error" | "success"