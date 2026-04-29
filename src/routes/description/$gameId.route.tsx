import { createFileRoute } from '@tanstack/react-router'
import DescriptionPage from '.'

export const Route = createFileRoute('/description/$gameId')({
  component: DescriptionPage,
})
