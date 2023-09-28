import { Leftbar } from '@/components/Login/Leftbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { login } from '@/store/actions/authActions'
import { ChevronRight } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { auth, googleProvider } from '@/firebase/config'
import { useEffect } from 'react'

interface FormProps {
  email: string
  password: string
}

export function LoginPage() {
  const { handleSubmit, register } = useForm<FormProps>()
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => state.auth)
  const navigate = useNavigate()

  const onSubmit = async (data: FormProps) => {
    // const response = await dispatch(login(data))
    // if (response.meta.requestStatus === 'fulfilled') {
    //   toast.success('Login realizado com sucesso!', {
    //     autoClose: 2000
    //   })

    //   setTimeout(() => {
    //     navigate('/dashboard')
    //   }, 2000)
    // }
    console.log('login here', data)
    const response = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    )
    console.log('resposta aqui', response)
  }

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error('err')
    }
  }

  const signOutWithGoogle = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error('err')
    }
  }

  console.log(auth?.currentUser)

  return (
    <>
      <main className="flex">
        <Leftbar />
        <div className="flex flex-1 items-center justify-center">
          <form
            className="mr-36 flex w-96 flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="mb-2 text-3xl font-bold uppercase">Login</h1>
            <Separator />
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                required
                register={register}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                required
                register={register}
              />
            </div>
            <div className="flex justify-center gap-2 ">
              <Button
                variant="outline"
                onClick={signOutWithGoogle}
                type="button"
              >
                Logout Google <ChevronRight className=" ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                onClick={signInWithGoogle}
                type="button"
              >
                Entrar com Google <ChevronRight className=" ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex justify-center gap-2">
              <a
                href="register"
                className="cursor-pointer text-xs text-muted-foreground hover:underline"
              >
                Cadastrar Conta
              </a>
              <Separator orientation="vertical" className="h-auto" />

              <a
                href="/forgot-password"
                className="cursor-pointer text-xs text-muted-foreground hover:underline"
              >
                Esqueci a senha
              </a>
            </div>

            <Button className="uppercase" type="submit" loading={loading}>
              Entrar <ChevronRight className=" ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </main>
      {/* <Modal /> */}
    </>
  )
}
