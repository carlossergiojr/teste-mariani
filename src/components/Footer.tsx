export function Footer() {
  return (
    <p className="text-sm text-muted-foreground">
      Lembre-se: você pode utilizar a variável{' '}
      <code className="text-violet-400">{`{transcription}`}</code> no seu prompt
      para adciionar o conteúdo da transcrição do vídeo selecionado
    </p>
  )
}
