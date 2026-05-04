import { createFileRoute } from '@tanstack/react-router'
import ColorPicker from '.'

export const Route = createFileRoute('/color-picker/')({
  component: ColorPicker,
})
