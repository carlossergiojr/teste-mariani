import { Button } from '@/components/ui/button'
import { FileText, LogOut } from 'lucide-react'
import { Separator } from './ui/separator'
import { useNavigate } from 'react-router-dom'
import useAppDispatch from '@/hooks/useAppDispatch'
import { logout } from '@/store/auth'

export function Sidebar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  async function handleLogout() {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div
      className="sticky top-0  h-screen w-64 border-r pb-12 pt-6"
      style={{
        backgroundImage: 'linear-gradient(180deg, #198AB5 0%, #00597B 100%)'
      }}
    >
      <div className="space-y-4 py-4 ">
        <div className="py-2 ">
          <h1 className="mb-1 px-4 text-center text-3xl font-bold text-white">
            LOGO
          </h1>

          <Separator className="my-8" />
          <div className="space-y-2 ">
            <Button variant="ghost" className="w-full justify-start text-white">
              <FileText className="mr-2 h-4 w-4 " />
              Documentos
            </Button>
            {/* <Button variant="ghost" className="w-full justify-start">
              <FileUp className="mr-2 h-4 w-4 " />
              Envio de Documentos
            </Button> */}
          </div>

          {/* <Separator className="my-8" /> */}
          <Button
            variant="ghost"
            className="my-8 w-full justify-start text-white"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sair
          </Button>
        </div>
      </div>
    </div>
  )
}
