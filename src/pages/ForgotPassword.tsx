import { Leftbar } from '@/components/Login/Leftbar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ForgotPasswordPage() {
  return (
    <main className="flex">
      <Leftbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="mr-36 flex w-96 flex-col gap-6">
          <h1 className="text-3xl font-bold  uppercase">Esqueceu a senha ?</h1>

          <Separator />
          <p className="text-xs text-muted-foreground">
            Insira o seu E-mail e enviaremos um link para redefinir sua senha.
          </p>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              onChange={() => {}}
            />
          </div>

          <div className="flex gap-2">
            <Button variant="outline" className="uppercase" asChild>
              <a className="cursor-pointer" href="/">
                <ChevronLeft className="h-4 w-4" />
              </a>
            </Button>
            <Button className="flex-1 uppercase">
              enviar <ChevronRight className=" ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
