import { Leftbar } from '@/components/Login/Leftbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import useAppDispatch from '@/hooks/useAppDispatch'
import useAppSelector from '@/hooks/useAppSelector'
import { registerUser } from '@/store/actions/authActions'
import { Check, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { extractNumbersFromString } from '@/utils/functions'

export type FormProps = {
  email: string
  name: string
  password: string
  passwordConfirmation: string
}

export function RegisterPage() {
  const { register, watch, handleSubmit } = useForm<FormProps>({})
  const dispatch = useAppDispatch()
  const { loading } = useAppSelector((state) => state.auth)
  const [cpf, setCPF] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const navigate = useNavigate()

  const [password, passwordConfirmation] = watch([
    'password',
    'passwordConfirmation'
  ])

  const onSubmit = async ({ email, name, password }: FormProps) => {
    const onlyCpfNumber = extractNumbersFromString(cpf)
    const onlyPhoneNumber = extractNumbersFromString(phoneNumber)
    const fullData = {
      name,
      email,
      password,
      cpf: onlyCpfNumber,
      phone: onlyPhoneNumber,
      onlyPhoneNumber
    }

    console.log('fulldata', fullData)
    // return

    const response = await dispatch(registerUser(fullData))
    if (response.meta.requestStatus === 'fulfilled') {
      toast.success('Usuário cadastrado com sucesso!')

      setTimeout(() => {
        navigate('/')
      }, 3000)
    }
  }

  function isPasswordMinimumLength() {
    return password?.length > 7
  }
  function isPasswordWithSpecialChar() {
    return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)
  }

  function isPasswordHasUpperAndLower() {
    return /[a-z]/.test(password) && /[A-Z]/.test(password)
  }

  function isPasswordsTheSame() {
    if (!password?.length && !passwordConfirmation?.length) {
      return false
    }
    return password === passwordConfirmation
  }

  const handleChange = (e: any) => {
    const inputValue = e.target.value.replace(/\D/g, '') // Remove caracteres não numéricos

    // Aplica a formatação automaticamente enquanto o usuário digita
    let formattedCPF = ''
    for (let i = 0; i < inputValue.length && i < 11; i++) {
      if (i === 3 || i === 6) {
        formattedCPF += '.'
      } else if (i === 9) {
        formattedCPF += '-'
      }
      formattedCPF += inputValue[i]
    }

    setCPF(formattedCPF)
  }

  const formatarTelefone = (numero: string) => {
    // Remover caracteres não numéricos do número
    numero = numero.replace(/\D/g, '')

    // Limitar a 10 dígitos
    if (numero.length > 11) {
      numero = numero.slice(0, 11)
    }

    // Aplicar a formatação "(00) 00000-0000"
    if (numero.length >= 6) {
      return `(${numero.slice(0, 2)}) ${numero.slice(2, 7)}-${numero.slice(7)}`
    } else if (numero.length >= 2) {
      return `(${numero.slice(0, 2)}) ${numero.slice(2)}`
    }

    return numero
  }

  // Manipulador de mudanças de input
  const handleInputChange = (e: any) => {
    const novoValor = formatarTelefone(e.target.value)
    setPhoneNumber(novoValor)
  }

  function isParametersChecked() {
    let response = false

    if (
      isPasswordMinimumLength() &&
      isPasswordHasUpperAndLower() &&
      isPasswordWithSpecialChar() &&
      isPasswordsTheSame()
    ) {
      response = true
    }

    return response
  }

  const getCorrectColor = (
    type: 'minimo' | 'upperLower' | 'speacialchar' | 'same'
  ) => {
    let retorno = false

    if (type === 'minimo') {
      retorno = isPasswordMinimumLength()
    }

    if (type === 'upperLower') {
      retorno = isPasswordHasUpperAndLower()
    }
    if (type === 'speacialchar') {
      retorno = isPasswordWithSpecialChar()
    }
    if (type === 'same') {
      retorno = isPasswordsTheSame()
    }

    if (retorno) {
      return <Check className="h-5 w-5 text-green-500" />
    } else {
      return <X className=" h-5 w-5 text-red-500" />
    }
  }

  return (
    <main className="flex">
      {/* lado esquerdo */}
      <Leftbar />

      {/* lado direito */}
      <div className="container flex flex-1 items-center justify-center">
        <form
          className="mr-36 flex w-96 flex-col gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="mb-2 text-3xl font-bold uppercase">Registrar</h1>
          <Separator />
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Nome</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nome"
              required
              register={register}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              placeholder="E-mail"
              required
              register={register}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              CPF <small className="text-muted-foreground">(Opcional)</small>
            </Label>
            <Input
              type="text"
              id="cpf"
              placeholder="000-000-000-00"
              onChange={handleChange}
              value={cpf}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">
              Telefone{' '}
              <small className="text-muted-foreground">(Opcional)</small>
            </Label>
            <Input
              type="text"
              id="phone"
              placeholder="(00) 00000-0000"
              value={phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                register={register}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Repetir senha</Label>
              <Input
                type="password"
                id="passwordConfirmation"
                placeholder="Repetir senha"
                register={register}
              />
            </div>
          </div>
          <div className="rounded-md border bg-blue-50 p-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-1">
              {getCorrectColor('minimo')}
              No mínimo 8 dígitos
            </p>
            <p className="flex items-center gap-1">
              {getCorrectColor('upperLower')}
              No mínimo uma letra maiúscula e minúscula
            </p>
            <p className="flex items-center gap-1">
              {getCorrectColor('speacialchar')} Caractere especial
            </p>
            <p className="flex items-center gap-1">
              {getCorrectColor('same')} Senhas iguais
            </p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="uppercase" asChild>
              <a className="cursor-pointer" href="/">
                <ChevronLeft className="h-4 w-4" />
              </a>
            </Button>
            <Button
              className="flex-1 uppercase"
              type="submit"
              disabled={!isParametersChecked()}
              loading={loading}
            >
              enviar <ChevronRight className=" ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
