import { createFileRoute } from '@tanstack/react-router'
import { KukuKube } from '.'

export const Route = createFileRoute('/kuku-kube/')({
  component: KukuKube,
})
