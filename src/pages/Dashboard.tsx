import { Files } from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useEffect, useState } from 'react'
import useAppDispatch from '@/hooks/useAppDispatch'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function DashboardPage() {
  const [movieList, setMovieList] = useState<any>([])
  const dispatch = useAppDispatch()

  const [form, setForm] = useState([])

  const moviesCollectionRef = collection(db, 'movies')

  useEffect(() => {
    const getMovieList = async () => {
      // read the data
      try {
        const data = await getDocs(moviesCollectionRef)
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }))

        setMovieList(filteredData)
        console.log('filtered', filteredData)
      } catch (err) {
        console.error('err')
      }

      // set the movie list
    }
    getMovieList()
  }, [])

  useEffect(() => {
    console.log('movielist', movieList)
  }, [movieList])

  return (
    <main className="flex min-h-screen max-w-screen-2xl gap-12 pr-12">
      {/* LADO ESQUERDO */}
      <Sidebar />

      {/* LADO DIREITO */}

      <div className="flex flex-1 flex-col gap-12  bg-zinc-50">
        {/* header */}
        <header className="mt-10 flex w-full max-w-screen-2xl items-center gap-2  rounded-xl bg-[#198AB5] px-4 py-6">
          <h1 className="flex scroll-m-20 items-center justify-center gap-2 text-2xl font-bold text-white">
            <Files className="h-8 w-8 " />
            Documentos
          </h1>
        </header>

        <Card className="rounded-XL mb-32 h-full p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#5EC4EB]">CRUD</h3>
            {/* <Button variant="link" className=" text-[#3E7990]">
              + UPLOAD NOVO DOCUMENTO
            </Button> */}
            <Label
              htmlFor="file"
              className="cursor-pointer text-[#3E7990] hover:underline"
            >
              + UPLOAD NOVO DOCUMENTO
            </Label>
            <input type="file" id="file" className="hidden" />
          </div>

          <div className="mt-8 ">
            <h3 className="text-xl">Filmes</h3>
            <div className="my-6 flex w-[600px] gap-2">
              <Input
                onChange={() => {
                  console.log('e')
                }}
                placeholder="Titulo"
              />
              <Input
                onChange={() => {
                  console.log('e')
                }}
                placeholder="Release Date"
              />
              <div>
                <Label htmlFor="check">Oscar</Label>
                <input id="check" type="checkbox" />
              </div>

              <Button>Adicionar</Button>
            </div>
            <div>
              {movieList.map((movie: any) => {
                return (
                  <div className="flex gap-4">
                    <p>{movie.title}</p>
                    <p>{movie.releaseDate}</p>
                    <p>{movie.receivedOscar ? 'Sim' : 'Não'}</p>
                  </div>
                )
              })}
            </div>
            {/* <DataTable columns={columns} data={tasks} /> */}
          </div>
        </Card>
      </div>
    </main>
  )
}
