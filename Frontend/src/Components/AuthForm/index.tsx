import { useEffect, useState } from "react"
import { FormEvent } from "react"
import { User, Lock } from 'phosphor-react'
import Text from "../../Components/Text"
import { TextInput } from "../../Components/TextInput"
import Button from "../Button"


interface AuthFormProps {
  formTitle: string;
  submitFormButton: string;
  linkDescription: string;
  submitFormButtonAction: ({user, password}: Auth) => void;
  // routeName: string;
}

interface AuthFormElements extends HTMLFormControlsCollection {
  user: HTMLInputElement;
  password: HTMLInputElement;
}

interface AuthFormElement extends HTMLFormElement {
  readonly elements: AuthFormElements;
}

export interface Auth {
  user: string;
  password: string;
}


function AuthForm({ formTitle, submitFormButton, submitFormButtonAction, linkDescription }: AuthFormProps) {

  function handleSubmit(event: FormEvent<AuthFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const user = form.elements.user.value
    const password = form.elements.password.value
    
    submitFormButtonAction({user, password})
  }

  return (
    <div className="flex flex-col w-full items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-stretch w-full max-w-sm">
        <Text asChild size="2xl" className="text-accentYellowColor mb-2"><h2>{formTitle}</h2></Text>

        <label htmlFor="user" className=" flex flex-col gap-1">
          <Text size="md" className="text-textColor">Login</Text>
          <TextInput.Root>
            <TextInput.Icon><User size={20} /></TextInput.Icon>
            <TextInput.Input type="text" id="user" name="user" placeholder="Digite seu login" required></TextInput.Input>
          </TextInput.Root>
        </label>

        <label htmlFor="password" className=" flex flex-col gap-1">
          <Text size="md" className="text-textColor">Senha</Text>
          <TextInput.Root>
            <TextInput.Icon><Lock size={20} /></TextInput.Icon>
            <TextInput.Input type="password" id="password" name="password" placeholder="*******" required></TextInput.Input>
          </TextInput.Root>
        </label>

        <Button type="submit" className="mt-4">{submitFormButton}</Button>
      </form>

      {/* <footer className=" flex flex-col items-center gap-4 mt-3">
              <Text asChild size="sm">
                  <Link className=" text-gray-500 underline hover:text-gray-200"
                      to={routeName} 
                  >
                      {linkDescription}
                  </Link>
              </Text>
          </footer> */}

    </div>

  )
}

export default AuthForm