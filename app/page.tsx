"use client";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useSpring, animated, config } from "react-spring";
import { useLottieAnimation } from "./hooks/useLottie/useLottieAnimation";
import dataLoaderWindel from "./assets/lotties/loader-windel.json";

import { options } from "./Interfaces/combobox";
import { Autocomplete } from "./Components/AutoComplete";
import { AutocompleteCombo } from "./Components/ComboBox";
import Calendar from "./Components/Calendar";
import { InputRoot } from "./Components/Input/InputRoot";
import { CepInput } from "./Components/Input/InputCep";
import { CnpjInput } from "./Components/Input/InputCnpj";
import { CpfInput } from "./Components/Input/InputCpf";
import { DecimalInput } from "./Components/Input/InputDecimal";
import { EmailInput } from "./Components/Input/InputEmail";
import { PasswordInput } from "./Components/Input/InputPassword";
import { PercentageInput } from "./Components/Input/InputPercent";
import { CurrencyInput } from "./Components/Input/InputCurrency";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const { lottieView } = useLottieAnimation({
    animationData: dataLoaderWindel,
    height: 200,
    width: 200,
  });

  const handleLogin = () => {
    setIsLoading(true);
    setShowForm(false);

    setTimeout(() => {
      setIsLoading(false);
      setShowForm(true);
    }, 5000); // Aumentamos o tempo para 5 segundos
  };

  const formSpringProps = useSpring({
    opacity: showForm ? 1 : 0,
    transform: `translateY(${showForm ? "0%" : "100%"})`,
    config: config.default,
  });

  const loadingSpringProps = useSpring({
    opacity: isLoading ? 1 : 0,
    transform: `translateY(${isLoading ? "0%" : "100%"})`,
    config: config.default,
  });

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="w-72">
        <div className="container mx-auto p-4 space-y-4">
          <PasswordInput id="password" />
          <CepInput id="cep" />
          <CnpjInput id="cnpj" />
          <CpfInput id="cpf" />
          <DecimalInput id="decimal" decimalPlaces={2} />
          <CurrencyInput id="currency" />
          <PercentageInput id="percentage" />
          <EmailInput id="email" />
          {/*  <AutocompleteCombo id="myComboBox" label="List" />
          <Autocomplete id="1" label="List two" options={options} /> */}
        </div>
        {/* <h2 className="text-2xl font-bold mb-4">Login</h2>
        <animated.form
          onSubmit={handleLogin}
          style={{
            opacity: formSpringProps.opacity,
            transform: formSpringProps.transform,
          }}
        >
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 mb-2"
            placeholder="E-mail"
          />

          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 mb-4"
            placeholder="Senha"
          />

          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 ${
              isLoading
                ? "opacity-0 pointer-events-none"
                : "opacity-100 pointer-events-auto"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Carregando..." : "Entrar"}
          </button> */}
        {/*   </animated.form> */}

        <Dialog.Root open={isLoading}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <animated.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              opacity: loadingSpringProps.opacity,
              transform: loadingSpringProps.transform,
            }}
          >
            <Dialog.Content style={{ width: "200px", height: "200px" }}>
              <div className="flex justify-center items-center h-full">
                {lottieView}
              </div>
            </Dialog.Content>
          </animated.div>
        </Dialog.Root>
      </div>
    </main>
  );
}
