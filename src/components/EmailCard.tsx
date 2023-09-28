import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'

import { Separator } from '@/components/ui/separator'
import { FolderSearch } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { ScrollArea } from './ui/scroll-area'

export function EmailCard() {
  return (
    <AlertDialog>
      <Card className="">
        <CardHeader className="">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1 ">
              <CardDescription>Arquivo:</CardDescription>
              <CardDescription>Assunto:</CardDescription>
              <CardDescription>Secretário: </CardDescription>
            </div>

            <AlertDialogTrigger>
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <Button size="icon">
                      <FolderSearch className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-zinc-600">
                    <p>Visualizar</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogDescription className="flex flex-col gap-6 ">
                  <div className="flex flex-col gap-3">
                    <div className="flex  border-b-2 pb-2">
                      <h4 className="mr-12">Arquivo:</h4>
                      <p className="font-bold underline">email@email.com</p>
                    </div>
                    <div className="flex  border-b-2 pb-2">
                      <h4 className="mr-12">Assunto:</h4>
                      <p className="font-bold underline">email@email.com</p>
                    </div>
                    <div className="flex  border-b-2 pb-2">
                      <h4 className="mr-9">Secretário:</h4>
                      <p className="font-bold underline">email@email.com</p>
                    </div>
                  </div>

                  <ScrollArea className="max-h-96">
                    <div className="text-zinc-950 ">
                      RECURSO DE INCONFORMIDAD 1130/2015.quejoso y recurrente:
                      instituto mexicano del seguro social.MINISTRO PONENTE:
                      juan n. silva meza.SECRETARIO: david arturo esquinca
                      vila.COLABORÓ: RICARDO TORRES VARGAS.México, Distrito
                      Federal. Acuerdo de la Segunda Sala de la Suprema Corte de
                      Justicia de la Nación, correspondiente veinticinco de
                      noviembre de dos mil quince.V I S T O S; y, R E S U L T A
                      N D O:PRIMERO. Mediante escrito presentado el veintiuno de
                      mayo de dos mil catorce, ante la Junta Especial Número
                      Nueve de la Federal de Conciliación y Arbitraje, el
                      Instituto Mexicano del Seguro Social, por conducto de su
                      apoderada legal, promovió juicio de amparo directo en
                      contra del laudo de veintiuno de noviembre de dos mil
                      trece, dictado en el expediente laboral número **********
                      de su índice (fojas 6 a 13 del cuaderno de amparo).La
                      parte quejosa estimó violados en su perjuicio los derechos
                      contenidos en los artículos 14 y 16 de la Constitución
                      Política de los Estados Unidos Mexicanos; expresando los
                      conceptos de violación que consideró pertinentes, y
                      señalando como tercero interesado a **********.SEGUNDO. El
                      Presidente del Cuarto Tribunal Colegiado en Materia de
                      Trabajo del Primer Circuito, a quien por razón de turno
                      tocó conocer del asunto, mediante proveído de veinticuatro
                      de septiembre de dos mil catorce, admitió la demanda de
                      amparo directo, quedando registrada con el número
                      DT.-********** (fojas 35 y 36 del cuaderno de
                      amparo).TERCERO. Previos los trámites legales
                      correspondientes, en sesión de veinticuatro de febrero de
                      dos mil quince, el Cuarto Tribunal Colegiado en Materia de
                      Trabajo del Primer Circuito dictó sentencia, en la que
                      resolvió conceder el amparo solicitado al quejoso (fojas
                      42 a 61 del cuaderno de amparo).CUARTO. En acatamiento a
                      dicho fallo, la Junta Especial Número Nueve de la Federal
                      de Conciliación y Arbitraje remitió al Tribunal Colegiado
                      de Circuito oficio de diez de marzo de dos mil quince,
                      mediante el cual comunicó que por acuerdo de esa misma
                      fecha, había dejado insubsistente el laudo reclamado (foja
                      65 del cuaderno de amparo). Así también, mediante oficio
                      de quince de abril de dos mil quince, adjuntó testimonio
                      del nuevo laudo, emitido en cumplimiento a la sentencia de
                      amparo (fojas 67 a 73 del cuaderno de amparo).Mediante
                      resolución de siete de mayo de dos mil quince, el Tribunal
                      Colegiado del conocimiento determinó que la Junta
                      responsable no había cumplido a cabalidad con la
                      ejecutoria de amparo, por lo que requirió su cumplimiento
                      en la forma ordenada (fojas 74 a 76 del cuaderno de
                      amparo).Posteriormente, por acuerdo de catorce de mayo de
                      dos mil quince, la Junta responsable dejó insubsistente el
                      laudo antes mencionado (foja 80 del cuaderno de amparo);
                      así también, con fecha veinte de mayo de dos mil quince,
                      emitió nuevo laudo de cumplimiento (fojas 83 a 88 del
                      cuaderno de amparo), dándose vista de éste a las partes.
                      QUINTO. Mediante resolución de siete de agosto de dos mil
                      quince, el Tribunal Colegiado del conocimiento declaró que
                      la sentencia de amparo había quedado cumplida (fojas 107 a
                      109 del cuaderno de amparo).SEXTO. En contra de la
                      anterior resolución, por escrito recibido en la Oficina de
                      Correspondencia Común de los Tribunales Colegiados en
                      Materia de Trabajo del Primer Circuito, el tres de
                      septiembre de dos mil quince, la parte quejosa interpuso
                      el presente recurso de inconformidad, el cual fue admitido
                      por el Presidente de este Alto Tribunal, mediante auto de
                      dieciocho de septiembre de dos mil quince, mismo que
                      ordenó su turno al Ministro Juan N. Silva Meza, para la
                      elaboración del proyecto de resolución correspondiente
                      (fojas 20 a 22 del toca).SÉPTIMO. Por acuerdo de catorce
                      de octubre de dos mil quince, el Presidente de la Segunda
                      Sala de este Alto Tribunal determinó que la misma se
                      avocara al conocimiento del presente asunto, ordenando que
                      se remitieran los autos al Ministro ponente (foja 34 del
                      toca).C O N S I D E R A N D O:PRIMERO. Competencia. Esta
                      Segunda Sala de la Suprema Corte de Justicia de la Nación
                      es competente para conocer del presente recurso de
                      inconformidad, en términos de lo dispuesto por los
                      artículos 201, fracción I, y 203 de la Ley de Amparo; 21,
                      fracción XI, de la Ley Orgánica del Poder Judicial de la
                      Federación, en relación con el punto Tercero del Acuerdo
                      5/2013, del Pleno de la Suprema Corte de Justicia de la
                      Nación, toda vez que se interpone en contra de la
                      resolución por la que se declaró cumplida la sentencia
                      dictada en un juicio de amparo, sin que sea necesaria la
                      intervención del Tribunal Pleno.SEGUNDO. Oportunidad. El
                      recurso de inconformidad se presentó oportunamente, pues
                      la resolución de siete de agosto de dos mil quince, por la
                      que se declaró cumplida la ejecutoria de amparo, fue
                      notificada de forma personal al Instituto quejoso el día
                      trece de agosto de dos mil quince (foja 110 del cuaderno
                      de amparo), notificación que surtió sus efectos el día
                      siguiente, de conformidad con el artículo 31, fracción II,
                      de la Ley de Amparo, por lo que el plazo de quince días
                      que establece el artículo 202 de la Ley de Amparo para la
                      interposición del recurso corrió del lunes diecisiete de
                      agosto al viernes cuatro de septiembre, ambos de dos mil
                      quince, excluyendo de dicho cómputo los días quince,
                      dieciséis, veintidós, veintitrés, veintinueve y treinta de
                      agosto de dos mil quince, por ser inhábiles en términos de
                      lo dispuesto por los artículos 19 de la Ley de Amparo y
                      163 de la Ley Orgánica del Poder Judicial de la
                      Federación.Atento a lo anterior, el recurso se presentó
                      oportunamente, en razón de que se interpuso el tres de
                      septiembre de dos mil quince, ante la Oficina de
                      Correspondencia Común de los Tribunales Colegiados en
                      Materia de Trabajo del Primer Circuito (según consta del
                      sello de acuse a foja 3 del toca).TERCERO. Legitimación.
                      El presente recurso de inconformidad fue interpuesto por
                      parte legitimada, de acuerdo con el artículo 202 de la Ley
                      de Amparo, en tanto lo interpone **********, quien tiene
                      el carácter de autorizado del Instituto Mexicano del
                      Seguro Social, personalidad que le fue reconocida en el
                      auto admisorio del juicio de amparo de veinticuatro de
                      septiembre de dos mil catorce.CUARTO. Procedencia. El
                      presente recurso de inconformidad es procedente en
                      términos del artículo 201, fracción I, de la Ley de
                      Amparo, ya que se interpuso en contra de la resolución de
                      siete de agosto de dos mil quince, emitida por el Cuarto
                      Tribunal Colegiado en Materia de Trabajo del Primer
                      Circuito, en el expediente de amparo directo
                      DT.-**********, mediante la cual se declaró cumplida la
                      ejecutoria de amparo.QUINTO. Agravio. Según se desprende
                      del escrito del recurso de inconformidad, el recurrente
                      formula un solo agravio, el cual consiste esencialmente en
                      lo siguiente:Tanto en los considerandos como en el
                      resolutivo Segundo del laudo de veinte de mayo de dos mil
                      quince, se reitera la condena a reconocer la enfermedad
                      **********, no obstante la concesión del amparo en favor
                      del ahora recurrente, al no haberse acreditado la
                      profesionalidad de tal enfermedad.SEXTO. Estudio. Conforme
                      a lo dispuesto en el artículo 201, fracción I, y 202 de la
                      Ley de Amparo, en relación con los artículos 192, 196, 213
                      y 214 del propio ordenamiento, la materia de estudio en
                      esta instancia se circunscribe a resolver si la sentencia
                      de amparo relativa se encuentra o no cumplida en su
                      totalidad, sin excesos ni defectos.Consecuentemente,
                      procede el análisis oficioso del cumplimiento a la
                      sentencia de amparo, por lo que es necesario hacer el
                      contraste entre los efectos para los cuales se concedió el
                      amparo, y lo resuelto por la Junta responsable en
                      acatamiento, para así estar en aptitud de determinar si la
                      resolución que tuvo por cumplida la ejecutoria es conforme
                      a derecho. Atento a lo anterior, el Instituto Mexicano del
                      Seguro Social promovió juicio de amparo directo en contra
                      del laudo de veintiuno de noviembre de dos mil trece,
                      dictado por la Junta Especial Número Nueve de la Federal
                      de Conciliación y Arbitraje, del cual conoció el Cuarto
                      Tribunal Colegiado en Materia de Trabajo del Primer
                      Circuito, quien en sesión de veinticuatro de febrero de
                      dos mil quince, resolvió conceder el amparo al quejoso por
                      las siguientes consideraciones: “En cambio, es fundado lo
                      que alega el disconforme en relación con la diversa
                      enfermedad de “**********”, que los peritos de la actora y
                      tercero en discordia (que fue a cuyos dictámenes confirió
                      valor probatorio) diagnosticaron a la actora, considerando
                      que tenían relación directa de causa efecto con el
                      accidente de trabajo que la asegurada sufrió el
                      veintisiete de febrero de dos mil ocho.En efecto, al
                      resolver la Junta el asunto por primera ocasión, estimó
                      que con lo dictaminado por los aludidos peritos se
                      acreditaba la profesionalidad de la enfermedad referida
                      (inclusive también respecto de la otra ya analizada,
                      denominada “**********”), por lo que condenó al
                      otorgamiento y pago de la pensión por incapacidad
                      reclamada. Inconforme con tal decisión, el Instituto
                      demandado promovió juicio de amparo directo en su contra,
                      del que conoció este Tribunal Colegiado, registrándolo
                      bajo el expediente DT. **********, el que en sesión de
                      diez de noviembre de dos mil once, lo resolvió en el
                      sentido de amparar al referido Organismo, para el efecto
                      de que la Junta dejara insubsistente ese primer laudo y
                      emitiera otro en el que considerara que: “…en los términos
                      en que están desahogados los dictámenes de los peritos del
                      actor y tercero en discordia, no son suficientes para
                      acreditar la profesionalidad de las enfermedades que
                      dictaminaron a la actora, consistentes en “**********” y,
                      “**********” y, acorde con ello, resuelva nuevamente la
                      controversia como en derecho corresponda”.En cumplimiento
                      a lo anterior, la responsable emitió un segundo laudo el
                      veinticuatro de enero
                    </div>
                  </ScrollArea>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Fechar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </div>
        </CardHeader>
        <div className="-mt-3 mb-2 px-6">
          <Separator />
        </div>
        <CardContent className="text-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud ex
        </CardContent>
      </Card>
    </AlertDialog>
  )
}
