import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { idiomas } from "./idiomas";
import {getUserBrowserLanguage} from '../../i18next/i18n';

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function LangSelector() {

    const [selected, setSelected] = useState(idiomas[0]);
    const { i18n } = useTranslation();
   
    useEffect(() => {
        try {
            // recojemos el idioma del navegador de la funcion que esta en i18n.js
            let userBrowserLang = getUserBrowserLanguage();
            if (userBrowserLang === undefined) {
                userBrowserLang = idiomas[0];
            }
            i18n.changeLanguage(userBrowserLang.lang);
            setSelected(userBrowserLang);
        // cambiamos el idioma de la aplicacion al idioma del navegador
        } catch (error) {
            console.log("[SelectorIdioma] Error useEfect: ", error);
            let userBrowserLang = idiomas[0];
            setSelected(userBrowserLang);
            
        }
    }, []);

    /**
     * @name cambiarIdioma
     * Función que cambia el idioma de la aplicación al idioma seleccionado
     * @param objeto 
     */
    function cambiarIdioma(objeto: any){
        try {
            i18n.changeLanguage(objeto.code);
            setSelected(objeto);
        } catch (error) {
            console.log("[SelectorIdioma] Error cambiarIdioma: ", error);
            i18n.changeLanguage(idiomas[0].code);
            setSelected(idiomas[0]);
        }
    }

    return (
        <Listbox value={selected} onChange= {cambiarIdioma}>
            <div className="relative mt-2">
            
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                        <img alt="" src={selected.img} className="h-5 w-5 flex-shrink-0 rounded-full" />
                        <span className="ml-3 block truncate">{selected.lang}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    </span>
                </ListboxButton>

                <ListboxOptions
                    transition
                    className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                    {idiomas.map((lang) => (
                        <ListboxOption
                        key={lang.id}
                        value={lang}
                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                        >
                        <div className="flex items-center">
                            <img alt="" src={lang.img} className="h-5 w-5 flex-shrink-0 rounded-full" />
                            <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                                {lang.lang}
                            </span>
                        </div>

                        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                            <CheckIcon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>

    );
}
export default LangSelector;


