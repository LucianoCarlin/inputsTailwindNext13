"use client";
import { CepInput } from "./Components/Input/InputCep";
import { CnpjInput } from "./Components/Input/InputCnpj";
import { CpfInput } from "./Components/Input/InputCpf";
import { DecimalInput } from "./Components/Input/InputDecimal";
import { EmailInput } from "./Components/Input/InputEmail";
import { PasswordInput } from "./Components/Input/InputPassword";
import { PercentageInput } from "./Components/Input/InputPercent";
import { CurrencyInput } from "./Components/Input/InputCurrency";

export default function Login() {
  return (
    <main className="flex min-h-screen p-4">
      <div className="container mx-auto space-y-4 w-screen">
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
    </main>
  );
}
