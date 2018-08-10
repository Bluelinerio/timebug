//@flow

export type SelectedKeyEntry = {
  form: string,
  key: string
}

export type SelectedKeys = {
  [x: string]: SelectedKeyEntry
}

export type CarouselEntryType = {
  title: string,
  step: string
}

export type PresentationalFormElement = {
  text: string
}

export type InteractiveFormElement = {
  formIndex: string,
  formKey: string,
  value: any
}

export type FormElement = PresentationalFormElement | InteractiveFormElement